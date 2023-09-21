const mailModel = require('../emailModel');

module.exports = async (req, res) => {
  try {
    const { order_id, ticket_id } = req.query;
    if (!order_id || !ticket_id) {
      return res
        .status(400)
        .json({ error: 'order_id and ticket_id are required' });
    }

    const open_date = new Date();

    const modelUrl = new mailModel({
      order_id,
      ticket_id,
      open_date,
    });

    await modelUrl.save();

    res.status(200).json({ message: 'Data saved successfully' });
  } catch (err) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
