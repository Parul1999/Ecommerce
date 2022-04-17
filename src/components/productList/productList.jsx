import {  useProducts } from '../../context/products-context';
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
           <h1 className='textCenter'>NO MATCH FOUND😞</h1>
           }
       </main>
      
       </>
    )
}
