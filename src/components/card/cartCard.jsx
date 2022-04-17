import { useAuth } from "../../context/auth-context";
import { useCart } from "../../context/cartmanagement-context";
import MoveToWishlist from "../buttons/moveToWishlist";
import RemoveFromBag from "../buttons/removeFromBag";
import { HandleDetailsChange } from "./api";
import { sizeArray } from "../../constants";

export default function CartCard({ prodDetails }) {
  const { imgUrl, productName, price, _id, qty, size } = prodDetails;
  const { dispatch } = useCart();
  const { auth } = useAuth();
  return (
    <div className="card-col basic-card card-horizontal">
      <div>
        <img className="card-img basic-img" src={imgUrl} alt={productName} />

        <header>
          <h3>{productName}</h3>
          <h5>Rs.{price}</h5>
          <span className="quant-size">
            <label htmlFor="quantity">Quant:</label>
            <select
              name="quantity"
              id="quantity"
              value={qty}
              onChange={(e) => {
                HandleDetailsChange(
                  _id,
                  dispatch,
                  auth,
                  e.target.value,
                  size
                );
              }}
            >
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
            </select>
            <label htmlFor="size">Size:</label>

            <select name="size" id="size"  value= {size.toLocaleLowerCase()} onChange={(e) => {
              HandleDetailsChange(
                _id,
                dispatch,
                auth,
                qty,
                e.target.value
              );
            }}>
              {sizeArray &&
                sizeArray.map(({ meas, desc }) => {
                  return (
                    <option
                      title={desc}
                      value={meas.toLocaleLowerCase()}

                    >
                    {meas}
                    </option>
                  );
                })}
            </select>
          </span>
        </header>
      </div>

      <footer className="card-footer">
        <MoveToWishlist {...{ prodDetails }} />
        <RemoveFromBag {...{ prodDetails }} />
      </footer>
    </div>
  );
}
