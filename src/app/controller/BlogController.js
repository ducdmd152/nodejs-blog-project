const Blog = require("../models/Blog");
const { singleMongooseToObject } = require("../../util/mongoose");

class BlogController {
  // [GET] /blog/:slug
  show(req, res, next) {
    Blog.findOne({ slug: req.params.slug })
      .then((blog) =>
        res.render("blogs/show", {
          blog: {
            ...singleMongooseToObject(blog),
            postedTime: singleMongooseToObject(blog)
              .date.toLocaleString("en-US", {
                weekday: "short",
                month: "short",
                day: "numeric",
                year: "numeric",
                hour: "numeric",
                minute: "numeric",
              })
              .replace(/,/g, ""),
          },
        })
      )
      .catch(next);
  }
}

module.exports = new BlogController();
