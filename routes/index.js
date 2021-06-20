const express = require("express");
const router = express.Router();
const homeController = require("../controllers/home_controller");

router.get("/", homeController.home);
router.post("/create-contact", homeController.create);
// id displays the id of the contact to be deleted
router.get("/delete-contact/:id", homeController.delete);

module.exports = router;
