const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const Blog = new Schema({
  _id: { type: ObjectId, auto: true },
  title: { type: String, maxLength: 255 },
  desc: { type: String, maxLength: 600 },
  date: { type: Date, default: Date.now },
  image: String,
  slug: String,
});

module.exports = mongoose.model("Blog", Blog);
