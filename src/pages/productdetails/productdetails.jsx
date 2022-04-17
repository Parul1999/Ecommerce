import '../productdetails/productdetails.css'
import RenderDetails from './RenderDetails'
import { useParams } from 'react-router-dom'
import { useProducts } from '../../context/products-context';
import { useCart } from '../../context/cartmanagement-context';
import { useEffect } from 'react';


export default function ProductDetails(){
    const {id} = useParams();
    const {currentProduct,dispatch} = useCart()
    const {state} = useProducts();
    const {products} =state;

    const getProductDetails=(productId)=>{
        if(products && products.length >0)
        {return products.find((product) => product._id === productId);}
        return [];
    }
    const productDetails = currentProduct ?? getProductDetails(id)
    
    useEffect(()=>{
     if(!currentProduct || currentProduct.length==0){
         dispatch({type:'ADD_TO_PROD_DETAILS',payload:productDetails})
     }
    },[productDetails])
    
    return(
    <>
       <h1 className="page-heading">Product Details</h1>
      {productDetails && <RenderDetails productDetails={productDetails}/>}
    </>
    )
}