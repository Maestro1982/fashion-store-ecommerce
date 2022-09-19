// To seed all the data from data.js
import express from 'express';
import data from '../data.js';
import User from '../models/userModel.js';

const seedRouter = express.Router();

seedRouter.get('/', async (req, res) => {
  // Seed for users
  await User.remove({});
  const createdUser = await User.insertMany(data.users);

  res.send({ createdUser });
});
export default seedRouter;
