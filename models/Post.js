const mongoose = require("mongoose");

// Postlarning DB ga joylashtirish un kk bo'ladigan malumotlar sxemasini tuzdik
const PostSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

// Bu sxemani export qildik
module.exports = mongoose.model("Posts", PostSchema);
