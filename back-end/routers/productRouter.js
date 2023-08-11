let express = require("express");
let app = express();

let router = express.Router();
app.use(express.json());
let productModel = require("../models/productModel");

var createProduct = async (req, res) => {
  var dataFromPostman = req.body;
  var ob = new productModel(dataFromPostman);
  try {
    var data = await ob.save();
    if (data == undefined) {
      res.status(400);
      res.send("product can't insert");
    } else {
      res.status(200);
      res.send("product inserted");
    }
  } catch (ob) {
    res.status(400);
    res.send(ob.message);
  }
};

var readProduct = async (req, res) => {
  try {
    var data = await productModel.find();
    if (data[0] == undefined) {
      res.status(400);
      res.send("can not find any product");
    } else {
      res.status(200);
      res.send(data);
    }
  } catch (ob) {
    res.status(400);
    res.send(ob.message);
  }
};

var update = async (req, res) => {
  var dataFromPostman = req.body;
  var id = req.params.p1;

  try {
    var data = await productModel.updateOne(
      { _id: id },
      {
        $set: {
          productName: dataFromPostman.productName,
          unitPrice: dataFromPostman.unitPrice,
        },
      }
    );

    if (data.modifiedCount == 0) {
      res.status(400);
      res.send("product can't update");
    } else {
      res.status(200);
      res.send("product updated");
    }
  } catch (ob) {
    res.status(400);
    res.send(ob.message);
  }
};

var productDelete = async (req, res) => {
  var id = req.params.p2;

  try {
    var data = await productModel.deleteOne({ _id: id });

    if (data.deletedCount == 0) {
      res.status(400);
      res.send("product can't delete");
    } else {
      res.status(200);
      res.send("product deleted");
    }
  } catch (ob) {
    res.status(400);
    res.send(ob.message);
  }
};

var searchProduct = async (req, res) => {
  var myId = req.params.p2;
  try {
    var data = await productModel.find({ _id: myId });
    if (data[0] == undefined) {
      res.status(400);
      res.send("data cannot find");
    } else {
      res.status(200);
      res.send(data);
    }
  } catch (ob) {
    res.status(400);
    res.send(ob.message);
  }
};

router.route("/insertProduct").post(createProduct);
router.route("/getProduct").get(readProduct);
router.route("/updateProduct/:p1").post(update);
router.route("/deleteProduct/:p2").delete(productDelete);
router.route("/getProduct/:p2").get(searchProduct);

module.exports = router;
