const express = require("express");
const router = express.Router();

const Comment = require("../models/Comment");

router.get("/:id", async (req, res) => {
  try {
    const comments = await Comment.find({ post: req.params.id }).sort({
      date: -1,
    });
    res.json(comments);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

router.post("/", async (req, res) => {
  const { post, content } = req.body;

  try {
    const newComment = new Comment({
      post,
      content,
    });

    const comment = await newComment.save();

    res.json(comment);
  } catch (err) {
    console.error(er.message);
    res.status(500).send("Server Error");
  }
});

router.put("/like/:id", async (req, res) => {
  try {
    let comment = await Comment.findById(req.params.id);
    if (!comment) return res.status(404).json({ msg: "Comment not found" });

    comment = await Comment.findByIdAndUpdate(req.params.id, {
      $inc: { likes: 1 },
    });

    res.json(comment);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

router.delete("/:id", async (req, res) => {
  try {
    let comment = await Comment.findById(req.params.id);

    if (!comment) return res.status(404).json({ msg: "Comment not found" });

    await Comment.findByIdAndRemove(req.params.id);

    res.json({ msg: "Comment removed" });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

module.exports = router;
