import axios from "axios";

const HandleDetailsChange= async (productId,dispatch,auth,size,qty=1)=>{
    try {
        debugger
        const response = await axios.post(
          `/api/user/cart/${productId}`,
          {qty,size},
          { headers: { authorization: auth } }
        );
        if (response.status === 201) {
            debugger
          dispatch({ type: "CHANGE_DETAILS", payload: response.data.cart[0] });
          return response;
        }
      } catch (error) {
        console.log(error);
      }
}

export{HandleDetailsChange}