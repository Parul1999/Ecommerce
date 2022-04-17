import { NavLink } from "react-router-dom";
import { useCart } from "../../context/cartmanagement-context";
import AddToBag from "../buttons/addToBag";
import AddToWishlist from "../buttons/addToWishlist";

export default function ProductCard({ prodDetails }) {
    const { imgUrl, rating, productName, price, _id } = prodDetails;
    const {dispatch} =useCart()
    return (
        <NavLink to={`/productdetails/${_id}`} onClick={()=>{
            dispatch({type:"ADD_TO_PROD_DETAILS",payload:prodDetails})
        }}>
            <div className="card-col basic-card">
                <div>
                    <img className="card-img basic-img" src={imgUrl} alt="card" />
                    <header>
                        <h3>{productName}</h3>
                        <h6>
                            Rs. {price} | {rating} ⭐
                        </h6>
                    </header>
                </div>
                <footer className="card-footer">
                   <AddToWishlist {...{prodDetails}} key={_id}/>
                </footer>
            </div>
        </NavLink>
    );
}
