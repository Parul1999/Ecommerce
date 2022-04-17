import WishlistCard from "../../components/card/wishlistCard";
import { useCart } from "../../context/cartmanagement-context";
import "../wishlist/wishlist.css";
export default function Wishlist() {
  const { state} = useCart();
  return (
    <div className="wishlisted-container">
      <h1>My Wishlist</h1>
      <div className="wishlist-cards">
        {state.wishlist.itemsInWishlist &&
          state.wishlist.itemsInWishlist.map((prodDetails) => (
            <WishlistCard {...{ prodDetails }} />
          ))}
          { state.wishlist.itemsInWishlist.length==0 &&
            <div className="empty-wishlist-container">
            
            <img src="https://res.cloudinary.com/dyflmd7n7/image/upload/v1650153328/ecom/woolly-woman-in-red-dress-buying-yellow-sweater-online_w4ckmk.png" alt="empty-wishlist"/>
            <h1> Add Your Favourites ❣️</h1>
           </div>
          }
      </div>
    </div>
  );
}
