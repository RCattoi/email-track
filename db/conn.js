const mongoose = require('mongoose');

async function main() {
  try {
    await mongoose.connect(
      'mongodb+srv://rodrigoccattoi:KLNxD0Jrlinq1D0l@cluster0.ifdvaub.mongodb.net/?retryWrites=true&w=majority',
      { useNewUrlParser: true, useUnifiedTopology: true }
    );
    console.log('connectado ao banco');
  } catch (e) {
    console.log(e);
  }
}

module.exports = main;
