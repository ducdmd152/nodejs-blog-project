const newsRouter = require("./news.route.js");
const blogRouter = require("./blog.route.js");
const siteRouter = require("./site.route.js");

const route = (app) => {
  app.use("/news", newsRouter);
  app.use("/blog", blogRouter);
  app.use("/", siteRouter);
};

module.exports = route;
