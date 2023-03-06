import React , { useEffect  } from 'react'
import './productDetails.css'
import { useParams } from 'react-router-dom';
import img from '../../assets/mi 1.jpeg'

import ReviewCard from './ReviewCard'; 

import { getProductDetails } from '../../actions/productAction';

import { useDispatch, useSelector } from 'react-redux';


const ProductDetails = (  ) => {

    const dispatch = useDispatch();

    const {id} = useParams();


    useEffect(() => {
        dispatch(getProductDetails(id));
    }, [dispatch, id]);
    

    const product = useSelector(state => state.productDetails.product);
    
    const options = {
        edit: false,
        size: window.innerWidth <  600 ? 20 : 25,
        value: product.ratings,
        isHalf: true,
    }
    
    

    return (
        <div className='main_contaniner'>
            <div className="container">
                <div className='left_pic'>
                    <div className='pic'>
                        <img src={img} alt="img" />
                    </div>
                    <div className='pic_switch'>
                        
                    </div>
                </div>
                <div className='right_container'>
                    <div className='product_tittle'>
                        <h1>{product.name}</h1>
                    </div>
                    <div>
                        <span>₹{product.price}</span>
                        <p>Inclusive of all taxes</p>
                    </div>
                    <div className='about_product'>
                        <p>{product.description}</p>
                    </div>
                    <div className='btns'>
                        <button type="submit">Add to cart</button>
                        <button type="submit">Buy Now</button>
                    </div>
                    <div className='rating'>
                        <p>{product.rating}</p>
                        <p>number of rating</p>
                    </div>

                    {product.reviews && product.reviews[0] ? (
                        <div className='reviews'>
                            {product.reviews &&
                                product.reviews.map((review) => <ReviewCard review={review} />)}
                        </div>
                    ) : (
                        <p className='noReviews'>No reviews </p>
                    )}
                        
                    

                </div>
            </div>

        </div>
    )
}

export default ProductDetails
