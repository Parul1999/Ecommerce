import CartCard from '../../components/card/cartCard'
import '../cart/cart.css'
export default function Cart(){
    return(
        <>
        <h1 className="mycart">My Cart</h1>
    <main className="items-amount-wrapper">
      {/* <!-- Cart Container --> */}
      <div className="items-container">
        <CartCard/>
      </div>

      {/* <!-- Total Price --> */}
      <div className="amount-container">
        <h4>COUPONS</h4>
        <div className="coupon-wrap">
          <span className="coupon-inp-wrap">
            <p>Coupon Code</p>
            <input id="coupon-code"/>
          </span>
          <button className="btn btn-primary apply-btn">APPLY</button>
        </div>
        <div className="horiz-line-thin"></div>
        <h3>Price Details</h3>
        <p>No. of Items: <span>2</span></p>
        <p>Total MRP: <span>Rs.2000</span></p>
        <p>Discount on MRP: <span>- Rs.500</span></p>
        <p>Delivery Charges: <span className="success">FREE</span></p>
        <div className="horiz-line-thin"></div>
        <h4>TOTAL AMOUNT: <span>Rs.1500</span></h4>
        <p>You will save Rs.500 on your order</p>
        <button className="btn btn-primary">PLACE ORDER</button>
        <button className="btn btn-secondary sharecart">
          Share Your Cart<span className="material-icons-outlined"> share </span>
        </button>
      </div>
    </main>
        </>
    )
}