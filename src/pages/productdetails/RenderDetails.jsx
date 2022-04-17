import { useState } from "react";
import AddToBag from "../../components/buttons/addToBag";
import AddToWishlist from "../../components/buttons/addToWishlist";
import { sizeArray } from "../../constants";
import { useCart } from "../../context/cartmanagement-context";

export default function RenderDetails() {
    const { state,dispatch } = useCart()
    const {currentProduct:productDetails} = state;
    const { imgUrl, description, discount, originalPrice, productName, price, rating, size } = productDetails;
    const [error, setError] = useState(false);

    return (<>
        <main className="product-detail-wrapper">
            <img src={imgUrl} alt={productName} className="product-img" />
            <div className="product-details">
                <section>
                    <h2>{productName}</h2>
                    <p className="product-desc">{description}</p>
                </section>
                <section className="rating-wrapper">
                    <div>
                        <span className="material-icons-outlined">
                            hotel_class
                        </span><span className="product-rating">{rating}</span>
                    </div>
                </section>
                <div className="horiz-line-thin"></div>
                <section className="product-pricing">
                    <h4>Rs.{price}</h4>
                    <h4 className="grey-txt product-orig-price">Rs.{originalPrice}</h4>
                    <h4 className="success">(Flat {discount} OFF)</h4>
                </section>
                <section>
                    <h3>SELECT SIZE</h3>
                    <div className="size-wrapper">
                        {
                            sizeArray && sizeArray.map(({ meas, desc }) => {
                                return (
                                    <button className={`letter-avatar ${size == meas ? "selected-size" : ""}`} title={desc} value={meas.toLocaleLowerCase()}
                                        onClick={(e) => {
                                            dispatch({ type: 'SELECT_SIZE', payload:meas})
                                            setError(false)
                                        }}>
                                        <span className="letter-avatar-text">{meas}</span>
                                    </button>
                                )
                            })}
                    </div>
                </section>
                <section>
                    {error &&
                        <p className="txt-danger">Please Select A Size</p>
                    }
                </section>
                <section className="card-btns">
                    <AddToBag prodDetails={productDetails} {...{ size, setError }} />
                    <AddToWishlist prodDetails={productDetails} />
                </section>
                <section className="delivery-terms">
                    <small className="grey-txt">100% Original Products</small>
                    <small className="grey-txt">Pay on delivery might be available</small>
                    <small className="grey-txt">Easy 30 days returns and exchanges</small>
                    <small className="grey-txt">Try & Buy might be available</small>
                </section>


            </div>
        </main>
    </>
    );
}
