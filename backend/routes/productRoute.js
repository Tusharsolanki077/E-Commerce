const express = require('express');
const { getAllproducts,createProduct,updateProduct,deleteProduct,getProductDetails } = require('../controllers/productControllers');
const { isAuthenticatedUser, authorizeRoles } = require('../middleware/auth');

const router = express.Router();

router.route("/products").get( getAllproducts);
router.route("/product/new").post(isAuthenticatedUser, authorizeRoles("admin"),createProduct);

router.route("/product/:id")
.put(isAuthenticatedUser, authorizeRoles("admin"),updateProduct)
.delete(isAuthenticatedUser, authorizeRoles("admin"),deleteProduct)
.get(getProductDetails);


module.exports = router