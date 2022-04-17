import axios from "axios";
import { createContext, useContext, useReducer } from "react";
import { useEffect } from "react";
import { handleCart } from "../reducer/cart-reducer";
import { useAuth } from "./auth-context";
const CartContext = createContext();


const CartProvider = ({ children }) => {
  const cart = { itemsInCart: [], quantity: 0, totalPrice: 0 };
  const wishlist = { itemsInWishlist: [], quantity: 0 };
  const currentProduct =[];
  const [state, dispatch] = useReducer(handleCart, { cart, wishlist,currentProduct });
  const {auth} = useAuth();

  useEffect(() => {
    if(auth!=""){
    const fetchCartProd = async () => {
      try {
        const response = await axios.get("/api/user/cart",{ 
            headers: {
            authorization: auth
          }});
        if (response.status == 200 &&  response.data.cart.length>0) {
            dispatch({ type: "FETCH_CART_DATA", payload: response.data.cart })
        }
      } catch (err) {
        console.log(err);
      }
    };
    fetchCartProd();

    
    const fetchWishlistProd = async () => {
        try {
          const response = await axios.get("/api/user/wishlist", {
            headers: {
              authorization: auth
            }
        });
          if (response.status == 200 && response.data.wishlist.length>0 ) {
            dispatch({ type: "FETCH_WISHLIST_DATA", payload: response.data.wishlist });
          }
        } catch (err) {
          console.log(err);
        }
      };
      fetchWishlistProd();
    }
  }, [auth]);

  return (
    <CartContext.Provider value={{ state, dispatch}}>
      {children}
    </CartContext.Provider>
  );
};

const useCart = () => useContext(CartContext);

export { useCart, CartProvider };
