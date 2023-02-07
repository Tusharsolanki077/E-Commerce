import React, { Fragment , useEffect } from 'react'
import './Home.css'
import ProductCard from '../layout/product/productCard';
import { clearErrors, getProduct } from "../../actions/productAction";

import Loader from '../layout/loader/loader'

import { useDispatch, useSelector } from "react-redux";


const Home = () => {

    const dispatch = useDispatch();
    const {loading,error,products} = useSelector((state) => state.products);

    useEffect(() => {
        if (error) {
          
          dispatch(clearErrors());
        }
        dispatch(getProduct());
      }, [dispatch, error]);



    return (

        <Fragment>
        {loading ? (
            <Loader/>
        ) : (
            <Fragment>

        <div className='home' >
            <div className="home__container">
                <img
                    className="home__image"
                    src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
                    alt=""
                />

                <h2 className="homeHeading">Featured Products</h2>
                <div className='products'>

                    {products && 
                        products.map((product) => 
                            <ProductCard key={product._id}  product={product} />
                        )
                    }
                    
                </div>
            </div>

        </div>
        
        </Fragment>
        )}

        </Fragment>
    )
}

export default Home
