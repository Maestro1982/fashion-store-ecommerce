import express from 'express';
import User from '../models/userModel.js';
import bcrypt from 'bcryptjs';

const userRouter = express.Router();

// For login user
userRouter.post('/login', async (req, res) => {
  const user = await User.findOne({ email: req.body.email });

  // If user exists
  if (user) {
    // Hash password
    if (bcrypt.compareSync(req.body.password, user.password)) {
      res.send({
        _id: user._id,
        username: user.username,
        email: user.email,
        password: user.password,
        isAdmin: user.isAdmin,
      });

      return;
    }
  }
  res.status(401).send({ message: 'Invalid password or email!' });
});

// For register user
userRouter.post('/register', async (req, res) => {
  const newUser = new User({
    username: req.body.username,
    email: req.body.email,
    password: bcrypt.hashSync(req.body.password),
  });
  const user = await newUser.save();
  res.send({
    _id: user._id,
    username: user.username,
    email: user.email,
    isAdmin: user.isAdmin,
  });
});

// For update user
userRouter.put('/update', async (req, res) => {
  const user = await User.findById(req.body._id);
  // If user exists
  if (user) {
    // If you want to update username or email
    user.username = req.body.username || user.username;
    user.email = req.body.email || user.email;
    // I will just update the password
    if (req.body.password) {
      user.password = bcrypt.hashSync(req.body.password);
    }

    const updatedUser = await user.save();
    res.send({
      _id: updatedUser._id,
      username: updatedUser.username,
      email: updatedUser.email,
      isAdmin: updatedUser.isAdmin,
    });
  } else {
    res.status(401).send({ message: 'User not Found!' });
  }
});

// Get all users for admin panel
userRouter.get('/all', async (req, res) => {
  const users = await User.find();
  res.send(users);
});

// Get user by id for admin panel
userRouter.get('/:id', async (req, res) => {
  const user = await User.findById(req.params.id);
  if (user) {
    res.send(user);
  } else {
    res.status(404).send({ message: 'User not found!' });
  }
});

export default userRouter;
