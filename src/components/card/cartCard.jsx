export default function CartCard(){
    return(
    <div className="card-col basic-card card-horizontal">
    <div>
      <img className="card-img basic-img" src="https://res.cloudinary.com/dyflmd7n7/image/upload/v1649643694/ecom/card_znmulq.jpg" alt="card" />

      <header>
        <h2>Rs.1000</h2>
        <p>by SharkyStore</p>
        <span className="quant-size">
          <label htmlFor="quantity">Quant:</label>
          <select name="quantity" id="quantity">
            <option value="one">1</option>
            <option value="two">2</option>
            <option value="three">3</option>
            <option value="four">4</option>
            <option value="five">5</option>
          </select>
          <label htmlFor="size">Size:</label>
          <select name="size" id="size">
            <option value="xs">XS</option>
            <option value="s">S</option>
            <option value="m">M</option>
            <option value="l">L</option>
            <option value="xl">XL</option>
          </select>
        </span>
      </header>
    </div>

    <footer className="card-footer">
      <button className="btn btn-primary">Add to Wishlist</button>
      <button className="btn btn-secondary">Remove from Cart</button>
    </footer>
  </div>
    )
}