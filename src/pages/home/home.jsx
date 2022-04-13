import { NavLink } from 'react-router-dom';
import '../home/home.css';
export default function Home(){
    return(
        <>
          <div className="res-img content">
        <button className="btn btn-primary shop-btn"><NavLink to="/products">Shop For Men</NavLink></button>
      <button className="btn btn-primary shop-btn"><NavLink to="/products">Shop For Women</NavLink></button>
  </div>
    <div className="subscribe-wrap">
      <h2>
        Yes! Send me exclusive offers and personalised tips for shopping and
        selling on Sharky.
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
        <label className="label" htmlFor="email">Email</label>
      </div>
      <button className="btn btn-primary subscribe-btn">Subscribe</button>
    </div>
        </>
    )
}