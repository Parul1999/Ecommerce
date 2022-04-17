import { useProducts } from "../../context/products-context";

export default function Filter() {
    const { state, dispatch } = useProducts();

    return (
        <>
            <ul className="sidebar-ul">
                <section className="filters-wrap ">
                    <h3>Filters</h3>
                    <button className="btn" onClick={() =>
                        dispatch({
                            type: "CLEAR",
                        })
                    }>Clear All</button>
                </section>

                <section className="price-wrap">
                    <h3>Price</h3>
                    <div className="slider">
                        ₹200 <input type="range" min="200" max="1000" value={state.rangeMaxVal}
                            onChange={(e) => dispatch({ type: "SET_RANGE", payload: e.target.value })}
                            className="slider " id="slider-type1" />₹1000
                    </div>
                </section>
                <section className="category-wrap list-wrap">
                    <h3>Category</h3>
                    <label>
                        <input type="checkbox" name="men" className="check-box"
                            checked={state.category.includes("men")}
                            onChange={(e) =>
                                dispatch({
                                    type: "CATEGORY",
                                    payload: "men"
                                })
                            } />
                        <span className="text-checkbox">Men Clothing</span>
                    </label>
                    <label>
                        <input type="checkbox" name="women" className="check-box"
                            checked={state.category.includes("women")}
                            onChange={(e) =>
                                dispatch({
                                    type: "CATEGORY",
                                    payload: "women"
                                })
                            } />
                        <span className="text-checkbox">Women Clothing</span>
                    </label>
                </section>
                <section className="rating-wrap list-wrap">
                    <h3>Rating</h3>
                    <span>
                        <input
                            checked={state.rating === 4}
                            onChange={() => dispatch({ type: "RATING", payload: 4 })}
                            type="radio" id="four-star" value="4" className="radio-btn" name="rating"
                        />
                        <label htmlFor="four-star">4 stars & above</label>
                    </span>
                    <span>
                        <input
                            checked={state.rating === 3}
                            onChange={() => dispatch({ type: "RATING", payload: 3 })}
                            type="radio" id="three-star" value="3" className="radio-btn" name="rating" />
                        <label htmlFor="three-star">3 stars & above</label>
                    </span>
                    <span>
                        <input
                            checked={state.rating === 2}
                            onChange={() => dispatch({ type: "RATING", payload: 2 })}
                            type="radio" id="two-star" value="2" className="radio-btn" name="rating" />
                        <label htmlFor="two-star">2 stars & above</label>
                    </span>
                    <span>
                        <input
                            checked={state.rating === 1}
                            onChange={() => dispatch({ type: "RATING", payload: 1 })}
                            type="radio" id="one-star" value="1" className="radio-btn" name="rating" />
                        <label htmlFor="one-star">1 star & above</label>
                    </span>
                </section>
                <section className="sortby-wrap list-wrap">
                    <h3>Sort By</h3>
                    <span>
                        <input type="radio" id="low" className="radio-btn" name="sort"
                            onChange={() => dispatch({ type: "SORT", payload: "LOW_TO_HIGH" })}
                        />
                        <label htmlFor="low">Price - Low to High</label>
                    </span>
                    <span>
                        <input type="radio" id="high" className="radio-btn" name="sort"
                            onChange={() => dispatch({ type: "SORT", payload: "HIGH_TO_LOW" })}
                        />
                        <label htmlFor="high">Price - High to Low</label>
                    </span>
                </section>
            </ul>
        </>
    )
}