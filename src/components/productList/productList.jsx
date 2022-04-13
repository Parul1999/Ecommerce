import { useProducts } from '../../context/products-context';
import ProductCard from '../card/productCard';

 export default function ProductList(){
    const {products} = useProducts();
    return(
        <>
        <main className="content-wrapper">
           {products && products.map((val)=>{
              return(<ProductCard prodDetails={val} key={val._id}/>)
           })}   
        
       </main>
      
       </>
    )
}
