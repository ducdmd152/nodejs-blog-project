module.exports = {
  mutipleMongooseToObject: (mongooses) =>
    mongooses.map((mongoose) => mongoose.toObject()),
  singleMongooseToObject: (mongoose) => mongoose.toObject(),
};
