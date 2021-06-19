const express = require("express");
const router = express.Router();
const homeController = require("../controllers/home_controller");

router.get("/", homeController.home);
router.post("/create-contact", homeController.create);
router.get("/delete-contact/:phone", homeController.delete);

module.exports = router;
