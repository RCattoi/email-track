const express = require('express');
const cors = require('cors');
const router = express.Router();
const mailModel = require('./emailModel');
const app = express();

app.use(cors());
app.use(express.json());
require('dotenv').config();
const conn = require('./db/conn');
conn();

const trackRoute = require('./api/track');
app.use('/api/track', trackRoute);

app.listen(3000, () => console.log('Its alive'));
