const Blog = require("../models/Blog");

class SiteController {
  // [GET] /
  home(req, res) {
    Blog.find({})
      .then((blogs) => {
        res.json(blogs);
      })
      .catch((err) => {
        res.status(400).json({ error: "ERROR" });
      });
  }

  // [GET] /search
  search(req, res) {
    res.render("search");
  }
}

module.exports = new SiteController();
