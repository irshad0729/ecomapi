// required product list schema
const ProductList = require("../models/products");

// delete product data from database through postmen
module.exports.delete = function (req, res) {
  let productId = req.params.id;
  ProductList.findByIdAndDelete(productId, function (err, data) {
    if (err) {
      console.log("Error in Deleting object from DB");
      return;
    }
    res.send(data);
  });
};

// delete product data from database through GUI
module.exports.deletegui = function (req, res) {
  let productId = req.params.id;
  ProductList.findByIdAndDelete(productId, function (err, data) {
    if (err) {
      console.log("Error in Deleting object from DB");
      return;
    }
    return res.redirect("back");
  });
};
