const Blog = require("../models/Blog");
const { mutipleMongooseToObject } = require("../../util/mongoose");

class BlogController {
  // [GET] /blog/:slug
  show(req, res, next) {
    Blog.findOne({ slug: req.params.slug })
      .then((blog) => res.json(blog))
      .catch(next);
  }
}

module.exports = new BlogController();
