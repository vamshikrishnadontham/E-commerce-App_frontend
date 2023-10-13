import shopify from "../assets/Home/shopifylogo.png";
import social_icon from "../assets/socialMediaIcon2.png";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="About_us">
          <img
            id="shopify"
            src={shopify}
            alt="not"
            height="40px"
            width="50px"
          />
          <p>Stay Home - Stay safe Shop online </p>
          <p>
            Shopify is a online E-commerce platform
            where you</p><p> can get all your
            products delivered to your door
          </p>
          <p>Copy Right ©️ shopify 2023 All Rights Reserved.</p>
        </div>
        <div className="follow_us">
          <h2>Follow us</h2>
          please follow us for more information on:
          <div>
            <img
              id="social_icons"
              src={social_icon}
              alt="not"
              width="30vw"
              height="5vh"
            />
          </div>
        </div>
        <div className="refernces">
          <h2>References</h2>
          <li>
            {" "}
            <Link className="refLink" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="refLink" to="/mobiles">
              Mobile
            </Link>
          </li>
          <li>
            <Link className="refLink" to="/watches">
              Watches
            </Link>
          </li>
          <li>
            <Link className="refLink" to="/headset">
              Headset
            </Link>
          </li>
          <li>
            {" "}
            <Link className="refLink" to="/laptop">
              Laptop
            </Link>
          </li>
        </div>
        <div className="cantact_us">
          <h2>Cantact us</h2>
          <p>📌Hyderabad Telangana</p>
          <p>📞call us:9999239347</p>
          <p>📧email:shopify@gmail.com</p>
        </div>
      </div>
    </>
  );
};
export default Footer;
