import CartCard from "../../components/card/cartCard";
import { useCart } from "../../context/cartmanagement-context";
import "../cart/cart.css";
export default function Cart() {
  const { state, dispatch } = useCart();
  
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
          <h4>COUPONS</h4>
          <div className="coupon-wrap">
            <span className="coupon-inp-wrap">
              <p>Coupon Code</p>
              <input id="coupon-code" />
            </span>
            <button className="btn btn-primary apply-btn">APPLY</button>
          </div>
          <div className="horiz-line-thin"></div>
          <h3>Price Details</h3>
          <p>
            No. of Items: <span>2</span>
          </p>
          <p>
            Total MRP: <span>Rs.2000</span>
          </p>
          <p>
            Discount on MRP: <span>- Rs.500</span>
          </p>
          <p>
            Delivery Charges: <span className="success">FREE</span>
          </p>
          <div className="horiz-line-thin"></div>
          <h4>
            TOTAL AMOUNT: <span>Rs.1500</span>
          </h4>
          <p>You will save Rs.500 on your order</p>
          <button className="btn btn-primary">PLACE ORDER</button>
          <button className="btn btn-secondary sharecart">
            Share Your Cart
            <span className="material-icons-outlined"> share </span>
          </button>
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
