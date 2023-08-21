const express = require("express");
const router = express.Router();

const blogController = require("../app/controller/BlogController");

router.get("/create", blogController.create);
router.post("/store", blogController.store);
router.post("/update", blogController.update);
router.get("/edit/:_id", blogController.edit);
router.get("/:slug", blogController.show);

module.exports = router;
