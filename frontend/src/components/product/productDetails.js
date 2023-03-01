import React , { useEffect  } from 'react'
import './productDetails.css'
import img from '../../assets/mi 1.jpeg'

import { getProductDetails } from '../../actions/productAction';

import { useDispatch, useSelector } from 'react-redux';


const ProductDetails = ({ match }) => {

    const dispatch = useDispatch();
    const product = useSelector(state => state.ProductDetails);

    useEffect(() => {
        dispatch(getProductDetails('63d213c6497f18d9bba36087'));
      }, [dispatch ]);


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
                        <h1>Product tittle</h1>
                    </div>
                    <div>
                        <span>₹`3w5`</span>
                        <p>Inclusive of all taxes</p>
                    </div>
                    <div className='about_product'>
                        <p>product details dsjfk jdfkjd</p>
                    </div>
                    <div className='btns'>
                        <button type="submit">Add to cart</button>
                        <button type="submit">Buy Now</button>
                    </div>
                    <div className='rating'>
                        <p>rating in stars</p>
                        <p>number of rating</p>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default ProductDetails
