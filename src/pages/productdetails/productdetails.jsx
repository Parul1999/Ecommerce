import '../productdetails/productdetails.css'
export default function ProductDetails(){
    return(
        <>
        <h1 className="page-heading">Product Details</h1>
        <main className="product-detail-wrapper">
            <img src="/assets/card.jpg" alt="pink-dress" className="product-img" />
            <div className="product-details">
                <section>
                    <h2>Blue Dress</h2>
                    <small className="grey-txt">by SharkyStore</small>
                    <p className="product-desc">Blue printed dress, with flawless design and colour</p>
                </section>
                <section className="rating-wrapper">
                    <div>
                        <span className="material-icons-outlined">
                            hotel_class
                        </span><span className="product-rating">4.2</span>
                    </div>
                </section>
                <div className="horiz-line-thin"></div>
                <section className="product-pricing">
                    <h4>Rs.1000</h4>
                    <h4 className="grey-txt product-orig-price">Rs.2000</h4>
                    <h4 className="success">(50% OFF)</h4>
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
                    <button className="btn btn-primary">Add to Cart</button>
                    <button className="btn btn-secondary">Add to Wishlist</button>
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
    )
}