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

app.get('/:order_id/:ticket_id', async (req, res) => {
  try {
    const order_id = req.params.order_id;
    const ticket_id = req.params.ticket_id;
    const open_date = new Date();

    const modelUrl = new mailModel({
      order_id,
      ticket_id,
      open_date,
    });

    await modelUrl.save();
    // res.send('OLA');
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});
app.listen(3000, () => console.log('Its alive'));
