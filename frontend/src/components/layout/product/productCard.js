import React from 'react'
import './productCard.css'

import { Link } from "react-router-dom";
import ReactStars from "react-rating-stars-component"

import img from "../../../assets/earphone.jpg"

import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const productCard = (product) => {

    const options = {
        value: product.product.rating,
        readOnly: true,
        precision: 0.5,
        edit:false,
      };

    return (

        <Link className="product" to={`/product/${product.product._id}`}>
            <div className="image">
                <img src={img} alt={product.product.name} />
            </div>
            <div className="namePrice">
                <h3>{product.product.name}</h3>
            </div>
            <p>{product.product.description}</p>
            <div>
                <ReactStars {...options}/><span>({product.product.numOfReviews} Reviews)</span>
            </div>

            <button className="btn">
                <span className="price">{`₹${product.product.price}`}</span>
                <span className="shopping-cart"><i className="fa fa-shopping-cart" aria-hidden="true"><ShoppingCartIcon /></i></span>
                <span className="buy">Buy Now</span>
            </button>
        </Link>
    )
}

export default productCard