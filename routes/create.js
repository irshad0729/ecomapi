// require express
const express = require("express");

// require router function
const router = express.Router();

// require product create controller
const productCreate = require("../controllers/create_product");

// access create issue route
router.post("/", productCreate.create);
router.post("/gui", productCreate.creategui);

// export router
module.exports = router;
