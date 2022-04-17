import axios from "axios";

const HandleAddToBag = async (product, auth, dispatch) => {
  try {
    const response = await axios.post(
      "/api/user/cart",
      { product },
      { headers: { authorization: auth } }
    );
    if (response.status === 201) {
      debugger
      dispatch({ type: "ADD_TO_CART", payload: response.data.cart[0] });
      return response;
    }
  } catch (error) {
    console.log(error);
  }
};

const HandleRemoveFromWishlist = async (_id, auth, dispatch) => {
  try {
    const response = await axios.delete(`/api/user/wishlist/${_id}`, {
      headers: { authorization: auth },
    });
    if (response.status === 200) {
      dispatch({
        type: "REMOVE_FROM_WISHLIST",
        payload: response.data.wishlist[0],
      });
    }
  } catch (error) {
    console.log(error);
  }
};

const HandleMoveToBag = async (product, auth, dispatch) => {
  const response = await HandleAddToBag(product, auth, dispatch);
  if (response?.status === 201) {
    await HandleRemoveFromWishlist(product._id,auth,dispatch);
  }
};
const HandleAddToWishlist = async (product, auth, dispatch) => {
  try {
    const response = await axios.post(
      "/api/user/wishlist",
      { product },
      { headers: { authorization: auth } }
    );
    if (response.status === 201) {
      dispatch({ type: "ADD_TO_WISHLIST", payload: response.data.wishlist[0] });
      return response;
    }
  } catch (error) {
    console.log(error);
  }
};

const HandleRemoveFromBag = async (_id, auth, dispatch) => {
  try {
    const response = await axios.delete(`/api/user/cart/${_id}`, {
      headers: { authorization: auth },
    });
    if (response.status === 200) {
      dispatch({ type: "REMOVE_FROM_CART", payload: response.data.cart[0] });
    }
  } catch (error) {
    console.log(error);
  }
};
const HandleMoveToWishlist = async (product, auth, dispatch) => {
    try{
   const response= await HandleAddToWishlist(product, auth, dispatch);
     if(response?.status === 201)
     HandleRemoveFromBag(product._id,auth,dispatch);
    }
    catch(error)
    {
        console.log(error)
    }
  
};

export {
  HandleAddToBag,
  HandleMoveToBag,
  HandleRemoveFromWishlist,
  HandleAddToWishlist,
  HandleRemoveFromBag,
  HandleMoveToWishlist,
};
