// On Adding To Bag , the item is not removed from Wishlist
// Add to Bag Button changed to Go To Bag and on coming back to this page back to add to bag

import { NavLink } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "../../context/auth-context";
import { useCart } from "../../context/cartmanagement-context";
import { HandleAddToBag } from "./api";
import "../../styles/styles.css";
import { useEffect } from "react";
import { HandleDetailsChange } from "../card/api";
import { useProducts } from "../../context/products-context";

export default function AddToBag({ prodDetails, size, setError }) {
  const { auth } = useAuth();
  const { dispatch } = useCart();
  const {state} =useProducts()
  const [redirectToBag, setRedirectToBag] = useState(false);

  //To change go to bag to add to bag , if size is changed
  useEffect(() => {
    setRedirectToBag(false);
  }, [size]);

  const checkProdOfSameSize =(prodDetails,size)=>{ 
    state.products.map((item)=>{
      if(prodDetails._id === item._id && size === item.size){
        return true;
      }
    })
    return false;
  }
  const handleAddToBagMethod = async (size, prodDetails, auth, dispatch) => {
      const ifProdOfSameSizePresent = checkProdOfSameSize(prodDetails,size);
      let response = null;
      if (ifProdOfSameSizePresent) {
          response = await HandleDetailsChange(
            prodDetails._id, dispatch, auth, prodDetails.qty + 1,size
          )
      }
      else {
        response = await HandleAddToBag(
          prodDetails,
          auth,
          dispatch
        );

      }
      if (response?.status === 201) {
        setRedirectToBag(true);
        setError(false);
      }
  }

  return (
    <>
      {!redirectToBag && (
        <button
          className="btn btn-primary"
          onClick={async (e) => {
            e.preventDefault();
            if(size)
            {
              (prodDetails.qty + 1 > 6)?
              console.log("Cannot Add More Items of Same Size"):
              handleAddToBagMethod(size, prodDetails, auth, dispatch)
            }
            else{
              setError(true)
            }

          }}
        >
          Add to Bag
        </button>
      )}
      {redirectToBag && (
        <NavLink to="/cart">
          <button className="btn btn-primary">Go to Bag</button>
        </NavLink>
      )}
    </>
  );
}
