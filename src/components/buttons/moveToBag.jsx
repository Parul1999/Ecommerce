// On Moving To Bag , the item is removed from Wishlist 

import { useAuth } from "../../context/auth-context";
import { useCart } from "../../context/cartmanagement-context";
import { HandleMoveToBag } from "./api";

export default function MoveToBag({prodDetails}){
    const {auth} = useAuth()
    const {state,dispatch } = useCart();
    return(<>
            <button
              className="btn btn-primary"
              onClick={(e) => {
                // to prevent the link to redirect
                e.preventDefault();
                 HandleMoveToBag(prodDetails,auth,dispatch);
              }}
            >
              Move to Bag
            </button>
              </>
    )

}