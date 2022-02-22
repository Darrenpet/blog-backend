const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  body: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
    default: Date.now,
  },
  img: {
    type: String,
    required: false,
    default: "https://picsum.photos/1920",
  },
  author: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Post", postSchema);
