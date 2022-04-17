import axios from "axios";

const HandleDetailsChange= async (productId,dispatch,auth,qty,size)=>{
    try {
        const response = await axios.post(
          `/api/user/cart/${productId}`,
          {qty,size},
          { headers: { authorization: auth } }
        );
        if (response.status === 201) {
          dispatch({ type: "CHANGE_DETAILS", payload: response.data.cart });
          return response;
        }
      } catch (error) {
        console.log(error);
      }
}

export{HandleDetailsChange}