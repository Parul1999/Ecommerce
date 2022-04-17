import { useProducts } from '../../context/products-context'
import '../filters/filters.css'
import Filter from './filter'
export default function DesktopFilter() {
    const {state,dispatch} = useProducts()
    return (
        <div className="sidebar-wrapper dsk-sidebar-wrap">
            <section>
                <h3>Search</h3>
                <input name="prod" type="search" className="searchBar" autoComplete="off" value={state.searchProd} onChange={(e)=>{dispatch(
                    {type:"SEARCH",payload:e.target.value})}}/>
            </section>
            <Filter />
        </div>
    )
}