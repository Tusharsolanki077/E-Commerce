const express = require('express');
const { getAllproducts,createProduct } = require('../controllers/productControllers');

const router = express.Router();

router.route("/products").get(getAllproducts);
router.route("/product/new").post(createProduct);
// router.route("/product/:id").put();

module.exports = router