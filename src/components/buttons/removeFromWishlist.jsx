import { useAuth } from "../../context/auth-context";
import { useCart } from "../../context/cartmanagement-context";
import { HandleRemoveFromWishlist } from "./api";

export default function RemoveFromWishlist({_id}){
    const {auth} = useAuth()
    const {state,dispatch } = useCart();
    return(<>
            <button
              className="btn btn-primary"
              onClick={(e) => {
                // to prevent the link to redirect
                e.preventDefault();
                HandleRemoveFromWishlist(_id,auth,dispatch);
              }}
            >
              Remove from Wishlist
            </button>
              </>
    )

}