// Require express
const express = require("express");

// acquire Router function
const router = express.Router();
console.log("router loaded");

// Require home controller
const homeController = require("../controllers/home_controller");

// access home route
router.get("/", homeController.homegui);

// use futher route from projectdetials
router.use("/products", require("./products"));

// export router
module.exports = router;
