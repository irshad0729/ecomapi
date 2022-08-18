// Require moongoose library
const mongoose = require("mongoose");

// Defining project list schema
const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    quantity: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

// defining product is model
const Product = mongoose.model("Product", productSchema);
// export project list
module.exports = Product;
