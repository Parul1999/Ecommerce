import MoveToBag from "../buttons/moveToBag";
import RemoveFromWishlist from "../buttons/removeFromWishlist";

export default function WishlistCard({prodDetails}){
    const { imgUrl, productName, price,_id} = prodDetails;
    return(
        <div className="card-col basic-card">
        <div>
            <img className="card-img basic-img" src={imgUrl} alt={productName} />
            <header>
            <h3>{productName}</h3>
        <h5>Rs.{price}</h5>
            </header>
        </div>
        <footer className="card-footer">
       <MoveToBag {...{prodDetails}} />
       <RemoveFromWishlist {...{prodDetails}} />
        </footer>
    </div>

    )
}