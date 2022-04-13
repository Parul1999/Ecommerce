export default function RenderDetails({ productDetails }) {
    const { imgUrl, description, discount, originalPrice, productName, price, rating } = productDetails;
    return (<>
        <main className="product-detail-wrapper">
            <img src={imgUrl} alt="pink-dress" className="product-img" />
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
                        <div className="letter-avatar" title="Xtra-Small">
                            <span className="letter-avatar-text">XS</span>
                        </div>
                        <div className="letter-avatar" title="Small">
                            <span className="letter-avatar-text">S</span>
                        </div>
                        <div className="letter-avatar" title="Medium">
                            <span className="letter-avatar-text">M</span>
                        </div>
                        <div className="letter-avatar" title="Large">
                            <span className="letter-avatar-text">L</span>
                        </div>
                        <div className="letter-avatar" title="Xtra-Large">
                            <span className="letter-avatar-text">XL</span>
                        </div>
                    </div>
                </section>
                <section className="card-btns">
                    <button className="btn btn-primary">Move to Cart</button>
                    <button className="btn btn-secondary">Move to Wishlist</button>
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
