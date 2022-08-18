// require express
const express = require("express");

// require router function
const router = express.Router();

// required update controller 
const updateController = require("../controllers/update_product_controller");

// access update controller through postmen 
router.patch("/:id", updateController.update);

// access update controller through GUI 
router.post("/gui/:id", updateController.updategui);

// export router
module.exports = router;
