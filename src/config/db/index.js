const mongoose = require("mongoose");

const connect = async () => {
  try {
    await mongoose.connect("mongodb://127.0.0.1/nodejs_blog_dev");
    console.log("Connect successfully!");
  } catch (err) {
    console.log("Connect fail!");
  }
};

module.exports = { connect };
