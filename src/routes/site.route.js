const express = require("express");
const router = express.Router();

const siteController = require("../app/controller/SiteController");

router.use("/search", siteController.search);
router.use("/home", siteController.home);
router.use("/", siteController.home);

module.exports = router;
