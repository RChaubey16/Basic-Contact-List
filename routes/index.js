const express = require("express");
const router = express.Router();
const homeController = require("../controllers/home_controller");

router.get("/contact-list", homeController.home);

module.exports = router;
