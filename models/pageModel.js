const mongoose = require("mongoose");
const info = new mongoose.Schema({
  numb: {
    type: Number,
    default: 0,
  },
});

module.exports = mongoose.model("value", info);
