import { useAuth } from "../../context/auth-context";
import { useCart } from "../../context/cartmanagement-context";
import { HandleRemoveFromBag } from "./api";

export default function RemoveFromBag({_id}){
    const {auth} = useAuth()
    const {state,dispatch } = useCart();
    return(<>
            <button
              className="btn btn-primary"
              onClick={(e) => {
                // to prevent the link to redirect
                e.preventDefault();
                HandleRemoveFromBag(_id,auth,dispatch);
              }}
            >
              Remove from Bag
            </button>
              </>
    )

}