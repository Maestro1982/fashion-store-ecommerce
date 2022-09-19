import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import seedRouter from './routes/seedRoute.js';

const app = express();

// This is used for the PUT or POST method only, so that we can save what we are sending (object, req.body).
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Router
app.use('/api/seed', seedRouter);

// Connect with db
dotenv.config();
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log('Connected to DB!');
  })
  .catch((error) => {
    console.log(error.message);
  });

// Create port
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Serve at http://localhost:${port}`);
});
