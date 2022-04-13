import '../productdetails/productdetails.css'
import RenderDetails from './RenderDetails'
import { useParams } from 'react-router-dom'
import { useProducts } from '../../context/products-context';


export default function ProductDetails(){
    const {id} = useParams();
    const {products} = useProducts()
   
    const getProductDetails=(productId)=>{
        return products.find((product) => product._id === productId);
    }
    const productDetails = getProductDetails(id)
    
    return(
    <>
       <h1 className="page-heading">Product Details</h1>
      {productDetails && <RenderDetails productDetails={productDetails}/>}
    </>
    )
}