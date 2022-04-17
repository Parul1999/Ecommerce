const handleCart = (state, action) => {
  switch (action.type) {
    case "FETCH_CART_DATA": {
      return {
        ...state,
        cart: {
          itemsInCart: [...state.cart.itemsInCart, action.payload],
        },
      };
    }
    case "FETCH_WISHLIST_DATA": {
      return {
        ...state,
        wishlist: {
          itemsInWishlist: [...state.wishlist.itemsInWishlist, action.payload],
        },
      };
    }
    case "ADD_TO_CART": {
      return {
        ...state,
        cart: {
          itemsInCart: [...state.cart.itemsInCart, action.payload],
        },
      };
    }
    case "REMOVE_FROM_CART": {
      return {
        ...state,
        cart: {
          itemsInCart: state.cart.itemsInCart.filter(
            (item) => item._id !== action.payload._id
          ),
        },
      };
    }
    case "ADD_TO_WISHLIST": {
      return {
        ...state,
        wishlist: {
          itemsInWishlist: [...state.wishlist.itemsInWishlist, action.payload],
        },
      };
    }
    case "REMOVE_FROM_WISHLIST": {
      return {
        ...state,
        wishlist: {
          itemsInWishlist: state.wishlist.itemsInWishlist.filter(
            (item) => item._id !== action.payload._id
          ),
        },
      };
    }
    case "ADD_TO_PROD_DETAILS": {
      return {
        ...state,
        currentProduct: action.payload,
      };
    }
    case "SELECT_SIZE": {
      return {
        ...state,
        currentProduct: { ...state.currentProduct, size: action.payload },
      };
    }
    case "CHANGE_DETAILS": {
      return {
        ...state,
        cart: {
          itemsInCart: state.cart.itemsInCart.map((item) =>
            item._id === action.payload._id
              ? { ...item, qty: action.payload.qty, size: action.payload.size }
              : item
          ),
        },
      };
    }

    default:
      return state;
  }
};

export { handleCart };
