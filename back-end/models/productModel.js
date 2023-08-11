let mongoose = require("mongoose");

var productSchema = new mongoose.Schema(
  {
    productName: { type: String },
    unitPrice: { type: String },
    createdDate: { type: Date, default: Date.now() },
  },
  {
    versionKey: false,
  }
);

var productModel = mongoose.model("product", productSchema);

module.exports = productModel;
