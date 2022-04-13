import './products.css'
import DesktopFilter from "../../components/filters/desktopfilter";
import ProductList from '../../components/productList/productList';
import MobileFilter from '../../components/filters/mobilefilter'
import { useState } from 'react';


export default function Products(){
    //to handle filter module when clicked on Sort & Filter
    const [openFilter,setOpenFilter] = useState(false)
    return(
        <>
        <div className="sidebar-product-container">
         <DesktopFilter/>
         {openFilter && <MobileFilter {...{setOpenFilter}}/>}
         <ProductList/>
        </div>
        <div className='mobile-prod-filter'>
            <section>
                    <input name="prod" type="search"  className="searchBar mobileSearch" autoComplete="off" placeholder='Search Products'/>
                    </section>
                    <div className='vert-line-thin'></div>
                    <section className='cursorClick' onClick={()=>{setOpenFilter(true)}}>Sort & Filter</section>
       </div>
        </>
    )
}