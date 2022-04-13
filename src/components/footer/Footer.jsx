import '../footer/footer.css'
export default function Footer(){
    return(
        <footer className="footer-wrap">
        <div className="footer">
          <div>
            <h1>Help And Information</h1>
            <p>Help</p>
            <p>Track Order</p>
            <p>Delivery & Returns</p>
          </div>
          <div>
            <h1>About Sharky Store</h1>
            <p>About Us</p>
            <p>Contact Us</p>
            <p>Policies</p>
          </div>
          <div>
            <h1>Shopping From</h1>
            <p>You are in: In</p>
            <p>Change</p>
          </div>
        </div>
        <div className="footer-disc">
          <p>©2022 SharkyStore</p>
          <div>
            <h6>Privacy & Cookies</h6>
            <h6>T&Cs</h6>
          </div>
        </div>
      </footer>
  
    )
}