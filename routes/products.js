// Require express
const express = require("express");

// acquire Router function
const router = express.Router();
console.log("router loaded");

// Require home controller
const homeController = require("../controllers/home_controller");

// required delete controller 
const deleteController = require("../controllers/delete_product_controller");

// access home route
router.get("/", homeController.home);

// access home route
router.get("/products", homeController.home);

// use futher route from projectdetials
router.use("/create", require("./create"));

// access the route through postmen 
router.delete("/:id", deleteController.delete);

// access the route through GUI 
router.get("/gui/:id", deleteController.deletegui);

// access delete project list route
router.use("/update_quantity", require("./update_quantity"));

// export router
module.exports = router;
