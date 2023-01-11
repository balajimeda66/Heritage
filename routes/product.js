const Product = require("../models/User");
const {
  verifyToken,
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
} = require("./verifyToken");

const router = require("express");

//CREATE PRODUCT

router.post("/", verifyTokenAndAuthorization, async (req, res) => {
  const newProduct = new Product(req.body);
  try {
    const savedProduct = await newProduct.save();
    res.status(200).json(savedProduct);
  } catch (err) {
    res.status(500).json(err);
  }
});

// UPDATE PRODUCT
router.put("/:id", verifyTokenAndAuthorization, async (req, res) => {
  try {
    const updatedProduct = await Product.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedProduct);
  } catch (err) {
    res.status(500).json(err);
  }
});

//DELETE

router.delete("/:id", verifyTokenAndAdmin, async (req, res) => {
  try {
    await Product.findByIdAndDelete(req.params.id);
    res.status(200).json("product has been deleted");
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET PRODUCT

router.get("/find/:id", async (req, res) => {
  try {
    const Product = await Product.findById(req.params.id);
    res.status(200).json(Product);
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET ALL PRODUCTS

router.get("/", async (req, res) => {
  const qNew = req.query.new;
  const qCategory = req.query.qCategory;
  try {
    let products;
    if (qNew) {
      products = await products.find().sort({ createdAt: -1 }).limit(5);
    } else if (qCategory) {
      products = await products.find({
        qCategories: {
          $in: [qCategory],
        },
      });
    } else {
      products = await products.find();
    }
    res.status(200).json(products);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
