const express = require("express");
const router = express.Router();
const Post = require("../models/Post.js");

// Barcha DB malumotlarini olish
router.get("/", async (req, res) => {
  try {
    const posts = await Post.find();
    res.json(posts);
  } catch (err) {
    res.json({ message: err });
  }
});

// DB ga malumot joylashtirish
router.post("/", async (req, res) => {
  const postData = new Post({
    title: req.body.title,
    description: req.body.description,
  });
  try {
    const savedPost = await postData.save();
    res.json(savedPost);
  } catch (err) {
    res.json({ message: err });
  }
});

// DB dan ma'lumotni ID orqali chaqirib olish
router.get("/:id", async (req, res) => {
  try {
    const dataId = await Post.findById(req.params.id);
    res.send(dataId);
  } catch (err) {
    res.json({ message: err });
  }
});

// DB dan ma'lumotni ID bo'yicha o'chirib tashlash
router.delete("/:id", async (req, res) => {
  try {
    const deleted = await Post.findByIdAndDelete(req.params.id);
    res.json("Ochdi");
  } catch (err) {
    res.json({ message: err });
  }
});

// Berilgan ID bo'yicha DB dagi ma'lumotni patch yani update qilish
router.patch("/:id", async (req, res) => {
  try {
    const updatedPost = await Post.updateOne(
      { _id: req.params.id },
      { $set: { title: req.body.title } }
    );
    res.json(updatedPost);
  } catch (err) {
    res.json({ message: err });
  }
});

module.exports = router;
