// required product list schema
const ProductList = require("../models/products");

// update project quantity project data from database through postmen
module.exports.update = function (req, res) {
  let upid = req.params.id;
  console.log("req.body.quantity :", req.body.quantity);
  ProductList.findByIdAndUpdate(
    upid,
    { quantity: req.body.quantity },
    { new: true },
    function (err, data) {
      if (err) {
        console.log("Error", err);
      } else {
        res.send(data);
      }
    }
  );
};

// update project quantity project data from database throug GUI
module.exports.updategui = function (req, res) {
  let upid = req.params.id;
  console.log("req.body.quantity :", req.body.quantity);
  ProductList.findByIdAndUpdate(
    upid,
    { quantity: req.body.quantity },
    { new: true },
    function (err, data) {
      if (err) {
        console.log("Error", err);
      } else {
        return res.redirect("back");
      }
    }
  );
};
