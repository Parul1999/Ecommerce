import { Response } from "miragejs";
import { formatDate, requiresAuth } from "../utils/authUtils";

/**
 * All the routes related to Cart are present here.
 * These are private routes.
 * Client needs to add "authorization" header with JWT token in it to access it.
 * */

/**
 * This handler handles getting items to user's cart.
 * send GET Request at /api/user/cart
 * */
export const getCartItemsHandler = function (schema, request) {
  const userId = requiresAuth.call(this, request);
  if (!userId) {
    return new Response(
      404,
      {},
      {
        errors: ["The email you entered is not Registered. Not Found error"],
      }
    );
  }
  const userCart = schema.users.findBy({ _id: userId }).cart;
  return new Response(200, {}, { cart: userCart });
};

/**
 * This handler handles adding items to user's cart.
 * send POST Request at /api/user/cart
 * body contains {product}
 * */

export const addItemToCartHandler = function (schema, request) {
  const userId = requiresAuth.call(this, request);
  try {
    if (!userId) {
      return new Response(
        404,
        {},
        {
          errors: ["The email you entered is not Registered. Not Found error"],
        }
      );
    }
    const userCart = schema.users.findBy({ _id: userId }).cart;
    const { product } = JSON.parse(request.requestBody);
 
    // If Id and Size Matches
    const isPresent =  userCart.some((el)=> {
      return el._id === product._id && el.size ===product.size;
    }); 
  
  if(!isPresent){
    userCart.push({
      ...product,
      createdAt: formatDate(),
      updatedAt: formatDate(),
      qty: 1,
    });
    this.db.users.update({ _id: userId }, { cart: userCart });
    return new Response(201, {}, { cart: userCart });
}
return new Response(409, {}, {
  errors: ["The item  already exists in the Cart !!"],
});
  } catch (error) {
    return new Response(
      500,
      {},
      {
        error,
      }
    );
  }
};

/**
 * This handler handles removing items to user's cart.
 * send DELETE Request at /api/user/cart/:productId
 * */

export const removeItemFromCartHandler = function (schema, request) {
  const userId = requiresAuth.call(this, request);
  try {
    if (!userId) {
      return new Response(
        404,
        {},
        {
          errors: ["The email you entered is not Registered. Not Found error"],
        }
      );
    }
    let userCart = schema.users.findBy({ _id: userId }).cart;
    const productId = request.params.productId;
    userCart = userCart.filter((item) => item._id !== productId);
    this.db.users.update({ _id: userId }, { cart: userCart });
    return new Response(200, {}, { cart: userCart });
  } catch (error) {
    return new Response(
      500,
      {},
      {
        error,
      }
    );
  }
};

/**
 * This handler handles adding items to user's cart.
 * send POST Request at /api/user/cart/:productId
 * body contains {action} (whose 'type' can be increment or decrement)
 * */

export const updateCartItemHandler = function (schema, request) {
  const productId = request.params.productId;
  const userId = requiresAuth.call(this, request);
  try {
    if (!userId) {
      return new Response(
        404,
        {},
        {
          errors: ["The email you entered is not Registered. Not Found error"],
        }
      );
    }
    const userCart = schema.users.findBy({ _id: userId }).cart;
    const { qty,size } = JSON.parse(request.requestBody);

      userCart.forEach((product) => {
        if (product._id === productId) {
          product.qty = qty;
          product.size = size;
          product.updatedAt = formatDate();
        }
      });
    
    this.db.users.update({ _id: userId }, { cart: userCart });
    return new Response(201, {}, { cart: userCart });
  } catch (error) {
    return new Response(
      500,
      {},
      {
        error,
      }
    );
  }
};
