import CartCard from "../../components/card/cartCard";
import { useCart } from "../../context/cartmanagement-context";
import "../cart/cart.css";
export default function Cart() {
  const { state, dispatch } = useCart();
  console.log(state.cart.itemsInCart)
  const totalItems = state.cart.itemsInCart.reduce((acc,item)=>{
    return acc+Number(item.qty);
  },0)
  const totalPrice = state.cart.itemsInCart.reduce((acc,item)=>{
     return acc+(Number(item.qty)*Number(item.originalPrice))
  },0)
  const totalDiscount = state.cart.itemsInCart.reduce((acc,item)=>{
     return acc+(Number(item.qty)*Number(item.discount))
  },0)
  return (
    <>
      <h1 className="mycart">My Cart</h1>
      
      {state.cart.itemsInCart && state.cart.itemsInCart.length !=0 &&
      <main className="items-amount-wrapper">

        {/* <!-- Cart Container --> */}
        <div className="items-container">
          { state.cart.itemsInCart.map((prodDetails)=><CartCard {...{prodDetails}} key={prodDetails._id} />)}
        </div>

        {/* <!-- Total Price --> */}
        <div className="amount-container">
        
          <div className="horiz-line-thin"></div>
          <h3>Price Details</h3>
          <p>
            No. of Items: <span>{totalItems}</span>
          </p>
          <p>
            Total MRP: <span> Rs. {totalPrice}</span>
          </p>
          <p>
            Discount on MRP: <span>- Rs.{totalDiscount}</span>
          </p>
          <p>
            Delivery Charges: <span className="success">FREE</span>
          </p>
          <div className="horiz-line-thin"></div>
          <h4>
            TOTAL AMOUNT: <span>{totalPrice-totalDiscount}</span>
          </h4>
          <p>You will save Rs.{totalDiscount} on your order</p>
          <button className="btn btn-primary">PLACE ORDER</button>

        </div>
      </main>
      }
           {
        
        !state.cart.itemsInCart || state.cart.itemsInCart.length == 0 &&
        <main className="empty-cart-wrapper">  <h1>Stop Thinking 🤔 Start Shopping 🛒</h1>
        <img src="https://res.cloudinary.com/dyflmd7n7/image/upload/v1650151455/ecom/f243c6ab-f391-4f8f-aef0-476cd447f17b_ybze5g.png" alt="empty-cart"/>
        </main>
      }
    </>
  );
}
