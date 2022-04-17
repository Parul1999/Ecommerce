import { NavLink } from "react-router-dom";
import { useProducts } from "../../context/products-context";
import "../home/home.css";
export default function Home() {
  const { dispatch } = useProducts();
  return (
    <>
      <div className="res-img content">
    
          <NavLink to="/products">
        <button
          className="btn btn-primary shop-btn">
        👜 LET'S GO SHOPPING 👜
        </button>
        </NavLink>
       
      </div>
      <div className="subscribe-wrap">
        <h2>
          Yes! Send me exclusive offers and personalised tips for shopping and
          selling on अपनाstore.
        </h2>
        <div className="field subscribe-inp">
          <input
            className="input"
            type="email"
            name="email"
            id="email"
            placeholder="*"
            autoComplete="off"
          />
          <label className="label" htmlFor="email">
            Email
          </label>
        </div>
        <button className="btn btn-primary subscribe-btn">Subscribe</button>
      </div>
    </>
  );
}
