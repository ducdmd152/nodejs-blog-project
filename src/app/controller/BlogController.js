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
    const objectIdToUpdate = req.body._id;
    const updateInfo = {
      title: req.body.title,
      desc: req.body.desc,
      image: req.body.image,
      slug: req.body.title.toLowerCase().replace(/\s+/g, "-"),
    };

    Blog.updateOne(
      { _id: objectIdToUpdate },
      // Your criteria for finding the document to update
      updateInfo, // The update you want to perform
      { new: true }
    )
      .then((blog) => res.redirect("/blog/" + updateInfo.slug))
      .catch(next);
  }
}

module.exports = new BlogController();
