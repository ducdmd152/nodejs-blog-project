const Blog = require("../models/Blog");
const { mutipleMongooseToObject } = require("../../util/mongoose");

class BlogController {
  // [GET] /blog/:slug
  show(req, res) {
    res.render("search");
  }
}

module.exports = new BlogController();
