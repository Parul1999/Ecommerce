import { NavLink } from "react-router-dom"

export default function ProductCard({prodDetails}){

    const {imgUrl,rating,productName,price,_id} = prodDetails

    return(
        <NavLink to={`/productdetails/${_id}`}>
        <div className="card-col basic-card">
        <div>
            <img className="card-img basic-img" src={imgUrl} alt="card" />
            <header>
                <h3>{productName}</h3>
                <h6> Rs. {price} | {rating} ⭐</h6>
            </header>
        </div>
        <footer className="card-footer">
            <button className="btn btn-primary">Move to Cart</button>
            <button className="btn btn-secondary">Move to Wishlist</button>
        </footer>
    </div>
    </NavLink>
    )
}