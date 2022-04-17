// On Moving To Wishlist , the item is removed from Bag
// On Moving To Bag , the item is removed from Wishlist 

import { useAuth } from "../../context/auth-context";
import { useCart } from "../../context/cartmanagement-context";
import { HandleMoveToWishlist } from "./api";

export default function MoveToWishlist({prodDetails}){
    const {auth} = useAuth()
    const {state,dispatch } = useCart();
    return(<>
            <button
              className="btn btn-primary"
              onClick={(e) => {
                // to prevent the link to redirect      
                e.preventDefault();
                 HandleMoveToWishlist(prodDetails,auth,dispatch);
              }}
            >
              Move to Wishlist
            </button>
              </>
    )

} 
