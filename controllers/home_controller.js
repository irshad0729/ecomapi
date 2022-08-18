// require product list schema 
const Product = require("../models/products");

// get the product details on page through postment
module.exports.home = function (req, res) {
  //   console.log("contents of project list", ProjectList);
  Product.find({}, function (err, product) {
    if (err) {
      console.log("Fetching error in Database");
      return;
    }
    res.send(product);
  }).sort("-createdAt"); // used to sort product list based on creation date
};

// rendering the product list on home page 
module.exports.homegui = function (req, res) {
  //   console.log("contents of project list", ProjectList);
  Product.find({}, function (err, product) {
    if (err) {
      console.log("Fetching error in Database");
      return;
    }
    return res.render("home", {
      title: "Ecomerce Api",
      headline: "ECOMERCE API",
      product_list: product,
    });

  }).sort("-createdAt"); // used to sort project list based on creation date
};