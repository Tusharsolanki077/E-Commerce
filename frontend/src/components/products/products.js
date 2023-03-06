import React ,{Fragment, useEffect} from 'react'
import './products.css'

import ProductCard from '../layout/product/productCard'
import { clearErrors,getProduct } from '../../actions/productAction'
import { useDispatch, useSelector } from 'react-redux'
import Loader from '../layout/loader/loader'

const Products = () => {

    const dispatch = useDispatch();

    const {loading,error,products} = useSelector((state) => state.products);

    useEffect(() => {
        if(error){ 
            dispatch(clearErrors());
        }
        dispatch(getProduct());
    },[dispatch,error]);



  return (
    <Fragment>
        {loading ? (
            <Loader/>
        ) : (

            <Fragment>

                <div className='products_page'>
                    <h1 className='heading'>Products</h1>
                <div className='products_container'>
            
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

export default Products