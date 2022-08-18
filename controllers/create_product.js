//  required projectDetails schema
const ProductList = require("../models/products");

// Inserting Product data into database through postmen
module.exports.create = function (req, res) {
  console.log("body  containes", req.body);
  ProductList.create(
    {
      name: req.body.name,
      quantity: req.body.quantity,
    },
    function (err, data) {
      if (err) {
        console.log("error :", err);
      }
      res.send(data);
    }
  );
};

// Inserting Product data into database through GUI
module.exports.creategui = function (req, res) {
  // console.log("body  containes", req.body);
  ProductList.create(
    {
      name: req.body.name,
      quantity: req.body.quantity,
    },
    function (err, data) {
      if (err) {
        console.log("error :", err);
      }
      return res.redirect("back");
    }
  );
};

