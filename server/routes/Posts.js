const express = require("express");
const router = express.Router();
const { Posts } = require("../models");
// you can write here get, post, delete put etcl request here
//if you are doing here / it means it is happening in /posts/ url
router.get("/", async (req, res) => {
  // res.send("Hello Worlds"); // like html
  // res.json("hello bhai");
  const listAllPosts = await Posts.findAll();
  res.json(listAllPosts);
});

// post request
router.post("/", async (req, res) => {
  const { title, PostText, username } = req.body;

  // console.log(req.body); // Logs the incoming payload
  // await Posts.create(post); // here we call sequelize function to create some thing
  if (!title || !PostText || !username) {
    return res.status(400).json({ error: "All fields are required." });
  }
  try {
    const post = await Posts.create({
      title,
      PostText,
      username,
    });
    res.status(201).json({ message: "Post created", post });
  } catch (error) {
    console.error("Error creating post:", error);
    res.status(500).json({ error: "Failed to create post" });
  }
});

module.exports = router;
