// const express = require('express');
// const bodyParser = require('body-parser');
// const connectDB = require('./config/connectDB');
// const authRoutes = require('./routes/authRoutes');
// const serviceRoutes = require('./routes/serviceRoutes');
// const reservationRoutes = require('./routes/reservationRoutes');
import bodyParser from "body-parser";
import express from "express";
import { connectDB } from "./config/connectDB.js";
import serviceRoutes from './routes/serviceRoutes.js'
import reservationRoutes from './routes/reservationRoutes.js'
import authRoutes from './routes/authRoutes.js'
const port = 3000
const app = express();
connectDB();

app.use(bodyParser.json());
app.use('/auth', authRoutes);
app.use('/services', serviceRoutes);
app.use('/reservations', reservationRoutes);

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
  });