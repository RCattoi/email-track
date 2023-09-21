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

app.listen(3000, () => console.log('Its alive'));
