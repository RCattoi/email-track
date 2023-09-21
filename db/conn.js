const mongoose = require('mongoose');

async function main() {
  try {
    await mongoose.connect(process.env.MONGO_DB, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('connectado ao banco');
  } catch (e) {
    console.log(e);
  }
}

module.exports = main;
