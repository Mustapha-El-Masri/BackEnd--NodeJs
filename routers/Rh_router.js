const express = require("express");

const route = express.Router();
const upload = require("../middleware/uploadfile");
const rhcontroller = require("../controllers/Rh_controller");

route.post("/create", upload.single("photo"), rhcontroller.create);

module.exports = route;
