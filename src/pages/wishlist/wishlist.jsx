import WishlistCard from '../../components/card/wishlistCard'
import '../wishlist/wishlist.css'
export default function Wishlist(){
    return(

        <div className="wishlisted-container">
        <h1>My Wishlist</h1>
        <div className="wishlist-cards">
         <WishlistCard/>
        </div>
</div>
    )
}