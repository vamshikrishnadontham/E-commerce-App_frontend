import shipping from "../assets/Home/shipping.svg";
import refund from "../assets/Home/refund.svg";
import support from "../assets/Home/support.svg";
// import Carousel from "./carousel/carousel";
const Home = () => {
  return (
    <>
      <div className="firstbox">
{/* <Carousel/> */}
      </div>
      <div className="services">
        <div className="s-box">
          <img src={shipping} alt="not" />
          <h2>Free Shipping</h2>
          <p>
            Welcome to our online store, where shopping just got even more
            rewarding! We're excited to introduce our exclusive Free Shipping
            offer, designed to make your shopping experience truly delightful.
          </p>
        </div>
        <div className="s-box">
       
          <img src={refund} alt="not" />
          <h2>100% Refund</h2>
          <p>
            Our 100% Refund Guarantee: Your Peace of Mind, Our Promise.At
            "shopify",your satisfaction is our top priority. We understand
            that sometimes things may not go as planned, and that's why we're
            proud to offer a 100% Refund Guarantee. With this assurance. 
          </p>
        </div>
        <div className="s-box">
      
          <img src={support} alt="not" />
          <h2>Support 24/7</h2>
          <p>
            At Shopify, your satisfaction is our priority, and that's why
            we're thrilled to offer 24/7 support. We understand that your needs
            don't follow a schedule, and neither do we. With our always-on
            support, you can shop, inquire, and resolve issues whenever it's
            convenient for you.
          </p>
        </div>
      </div>
    </>
  );
};
export default Home;
