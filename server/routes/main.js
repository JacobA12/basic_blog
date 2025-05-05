const express = require("express");
const router = express.Router();
const Post = require("../models/Post");

// Routes

//GET HOME
router.get("", async (req, res) => {
  const locals = {
    title: "NodeJs Blog",
    description: "Simple Blog created with NodeJs, Express, and MongoDb.",
  };

  try {
    const data = await Post.find();
    res.render("index", { locals, data });
  } catch (error) {
    console.error(error);
  }
});

router.get("/about", (req, res) => {
  res.render("about");
});

module.exports = router;
