const mongoose = require("mongoose");

const DiscussionSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  text: {
    type: String,
    required: true,
  },
  likes: {
    type: Number,
    required: true,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  userName: {
    type: String,
    ref: "User",
  },
  place_name: {
    type: String,
    required: false,
  },
  place_id: {
    type: String,
    required: false,
  },
  place_address: {
    type: String,
    required: false,
  },
  website: {
    type: String,
    required: false,
  },
});

module.exports = mongoose.model("Discussion", DiscussionSchema);