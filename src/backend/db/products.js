import { v4 as uuid } from "uuid";

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const products = [
  {
    _id: uuid(),
    imgUrl:'https://res.cloudinary.com/dyflmd7n7/image/upload/v1649643694/ecom/card_znmulq.jpg',
    category:'women',
    productName:'dress',
    price:"300",
    rating:"3",
    quantity:0
  }
];
