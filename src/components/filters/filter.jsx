export default function Filter(){
    return(
        <>
        
                <ul className="sidebar-ul">
                    <section className="filters-wrap ">
                        <h3>Filters</h3>
                        <button className="btn">Clear All</button>
                    </section>
                    
                    <section className="price-wrap">
                        <h3>Price</h3>
                        <div className="slider">
                            ₹500 <input type="range" min="500" max="1000"  className="slider " id="slider-type1" />₹1000
                        </div>
                    </section>
                    <section className="category-wrap list-wrap">
                        <h3>Category</h3>
                        <label>
                            <input type="checkbox" className="check-box" />
                            <span className="text-checkbox">Men Clothing</span>
                        </label>
                        <label>
                            <input type="checkbox" name="item" className="check-box" />
                            <span className="text-checkbox">Women Clothing</span>
                        </label>
                    </section>
                    <section className="rating-wrap list-wrap">
                        <h3>Rating</h3>
                        <span>
                            <input type="radio" id="four-star" value="4" className="radio-btn" name="rating"/>
                            <label htmlFor="four-star">4 stars & above</label>
                        </span>
                        <span>
                            <input type="radio" id="three-star" value="3" className="radio-btn" name="rating"/>
                            <label htmlFor="three-star">3 stars & above</label>
                        </span>
                        <span>
                            <input type="radio" id="two-star" value="2" className="radio-btn" name="rating"/>
                            <label htmlFor="two-star">2 stars & above</label>
                        </span>
                        <span>
                            <input type="radio" id="one-star" value="1" className="radio-btn" name="rating"/>
                            <label htmlFor="one-star">1 star & above</label>
                        </span>
                    </section>
                    <section className="sortby-wrap list-wrap">
                        <h3>Sort By</h3>
                        <span>
                            <input type="radio" id="low" value="lowToHight" className="radio-btn" name="sort"/>
                            <label htmlFor="low">Price - Low to High</label>
                        </span>
                        <span>
                            <input type="radio" id="high" value="highToLow" className="radio-btn" name="sort"/>
                            <label htmlFor="high">Price - High to Low</label>
                        </span>
                    </section>
                </ul>
        </>
    )
}