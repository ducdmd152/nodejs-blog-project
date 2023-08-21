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

  // [GET] /blog/edit/_id
  edit(req, res, next) {
    Blog.findOne({ _id: req.params._id })
      .then((blog) =>
        res.render("blogs/edit", {
          blog: singleMongooseToObject(blog),
        })
      )
      .catch(next);
  }

  // [POST] /blog/store
  update(req, res, next) {
    Blog.updateOne(
      { _id: req.params._id }, // Your criteria for finding the document to update
      {
        title: req.body.title,
        desc: req.body.desc,
        image: req.body.image,
        slug: req.body.title.toLowerCase().replace(/\s+/g, "-"),
      } // The update you want to perform
    )
      .then((blog) => {
        res.json(blog);
      })
      .catch(next);
  }
}

module.exports = new BlogController();
