const newsRouter = require("./news.route.js");
const siteRouter = require("./site.route.js");

const route = (app) => {
  app.use("/news", newsRouter);
  app.use("/", siteRouter);
};

module.exports = route;
