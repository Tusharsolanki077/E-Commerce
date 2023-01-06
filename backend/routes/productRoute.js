const express = require('express');
const { getAllproducts } = require('../controllers/productControllers');

const router = express.Router();

router.route("/products").get(getAllproducts);

module.exports = router