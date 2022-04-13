import './products.css'
import MobileFilter from "../../components/filters/mobilefilter";
import DesktopFilter from "../../components/filters/desktopfilter";
import ProductCard from '../../components/card/productCart';
import HandleModalDisplay from '../../components/utils/utils';


export default function Products(){
    const {filterOpen} =HandleModalDisplay()
    return(
        <>
        <div className="sidebar-product-container">
        {filterOpen&& <MobileFilter/>}
         <DesktopFilter/>
            <main className="content-wrapper">
              
             <ProductCard/>

            </main>

        </div>

        </>
    )
}