// On Adding To Wishlist , the item is not removed from Bag 
// Wishlist Button changed to Wishisted.
import { useAuth } from "../../context/auth-context";
import { useCart } from "../../context/cartmanagement-context";
import { HandleAddToWishlist } from "./api";

export default function AddToWishlist({prodDetails})
{
    const {auth} = useAuth()
    const {state,dispatch } = useCart();
    const isProductInWishlist = state.wishlist.itemsInWishlist.some((element,index) => {
        return element._id === prodDetails._id;
      });

    return(<>{!isProductInWishlist && (
        <button
          className="btn btn-primary"
          onClick={(e) => {
            // to prevent the link to redirect
            e.preventDefault();
            HandleAddToWishlist(prodDetails,auth,dispatch);
          }}
        >
          Wishlist
        </button>
      )}
      {
          isProductInWishlist && <button
          className="btn btn-primary btn-disabled">Wishlisted</button>
      }
      </>)
}