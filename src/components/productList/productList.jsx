import {  useProducts } from '../../context/products-context';
import './productList.css'
import { SortProducts,FilterProducts,SearchProducts } from '../../methods/methods';
import ProductCard from '../card/productCard';

 export default function ProductList(){
  const {state} = useProducts();
  const sortedList = SortProducts(state.sort, state.products);
  const filteredList = FilterProducts(state, sortedList);
  const finalList  = SearchProducts(state.searchProd,filteredList)
    return(
        <>
        <main className="content-wrapper">
           {finalList && finalList.map((val)=>{
              return(<ProductCard prodDetails={val} key={val._id}/>)
           })}   
           {finalList.length==0 &&
           <>
           <h1 className='textCenter'>SADLY😞</h1>
           <img className="img-no-data" src='https://res.cloudinary.com/dyflmd7n7/image/upload/v1650132427/ecom/No_data-rafiki_blg0g6.png
           ' alt="no match found"/>
           </>
           }
       </main>
      
       </>
    )
}
