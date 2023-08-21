const Blog = require("../models/Blog");
const { mutipleMongooseToObject } = require("../../util/mongoose");

class SiteController {
  // [GET] /
  home(req, res, next) {
    Blog.find({})
      .then((blogs) => {
        res.render("home", {
          blogs: mutipleMongooseToObject(blogs),
        });
      })
      .catch((error) => next(error));
  }

  // [GET] /search
  search(req, res) {
    res.render("search");
  }
}

module.exports = new SiteController();
