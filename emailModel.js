const mongoose = require('mongoose');

const MailSchema = new mongoose.Schema({
  order_id: Number,
  open_date: Date,
  ticket_id: Number,
});

const Mail = mongoose.model('Mail', MailSchema);

module.exports = Mail;
