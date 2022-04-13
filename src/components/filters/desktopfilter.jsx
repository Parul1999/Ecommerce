import '../filters/filters.css'
import Filter from './filter'
export default function DesktopFilter(){
    return(
           <div className="sidebar-wrapper dsk-sidebar-wrap">
           <section>
               <h3>Search</h3>
                    <input name="name" type="search"  className="searchBar" autoComplete="off" placeholder='Search'/>
            </section>
            <Filter/>
            </div>
    )
}