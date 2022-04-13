import '../filters/filters.css'
import Filter from './filter'
export default function MobileFilter({setOpenFilter}){
    return(
            <div id="filter-navbar" className="sidebar-wrapper overlay">
            <a href="#" className="closebtn" onClick={()=>{setOpenFilter(false)}}><span className="material-icons-outlined"> close
                </span></a>
                <Filter/>
           
        </div>
    )
}