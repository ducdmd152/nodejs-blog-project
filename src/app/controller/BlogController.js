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

  // [GET] /blog/create
  create(req, res, next) {
    res.render("blogs/create");
  }

  // [POST] /blog/store
  store(req, res, next) {
    Blog.create({
      title: req.body.title,
      desc: req.body.desc,
      image: req.body.image,
      slug: req.body.title.toLowerCase().replace(/\s+/g, "-"),
      date: new Date(),
    })
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
