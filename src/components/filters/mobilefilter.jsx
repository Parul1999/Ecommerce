import { NavLink } from 'react-router-dom'
import '../filters/filters.css'
export default function MobileFilter(){
    return(
        <>
             <div id="filter-navbar" className="sidebar-wrapper overlay">
            <a href="#" className="closebtn" ><span className="material-icons-outlined"> close
                </span></a>
            <div className="sidebar-ul overlay-content">
                <NavLink to="/wishlist" className="desktop-list-item">
                    <span className="material-icons-outlined"> favorite_border </span><span>Wishlist</span></NavLink>

                
                <NavLink to="/cart" className="desktop-list-item">
                    <span className="material-icons-outlined"> shopping_cart </span><span>Cart</span></NavLink>
                <hr />
                <section className="filters-wrap-mobile">
                    <h1>Filters</h1>
                    <button className="btn">Clear All</button>
                </section>
                <section className="price-wrap">
                    <h1>Price</h1>
                    <div className="slider">
                        ₹500 <input type="range" min="500" max="1000"  className="slider " id="slider-type1" />₹1000
                     </div>
                </section>
                <section className="category-wrap all-filters-wrap">
                    <h1>Category</h1>
                    <label>
                        <input type="checkbox" className="check-box" />
                        <span className="text-checkbox">Men Clothing</span>
                    </label>
                    <label>
                        <input type="checkbox" name="item" className="check-box" />
                        <span className="text-checkbox">Women Clothing</span>
                    </label>
                </section>
                <section className="rating-wrap all-filters-wrap">
                    <h1>Rating</h1>
                    <span>
                        <input type="radio" id="four-star" value="4" className="radio-btn" name="rating" />
                        <label htmlFor="four-star">4 stars & above</label>
                    </span>
                    <span>
                        <input type="radio" id="three-star" value="3" className="radio-btn" name="rating" />
                        <label htmlFor="three-star">3 stars & above</label>
                    </span>
                    <span>
                        <input type="radio" id="two-star" value="2" className="radio-btn" name="rating" />
                        <label htmlFor="two-star">2 stars & above</label>
                    </span>
                    <span>
                        <input type="radio" id="one-star" value="1" className="radio-btn" name="rating" />
                        <label htmlFor="one-star">1 star & above</label>
                    </span>
                </section>
                <section className="sortby-wrap all-filters-wrap">
                    <h1>Sort By</h1>
                    <span>
                        <input type="radio" id="low" value="4" className="radio-btn" name="sort" />
                        <label htmlFor="low">Price - Low to High</label>
                    </span>
                    <span>
                        <input type="radio" id="high" value="3" className="radio-btn" name="sort" />
                        <label htmlFor="high">Price - High to Low</label>
                    </span>
                </section>
            </div>
        </div>

        </>
    )
}