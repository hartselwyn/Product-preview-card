import React from 'react';
import  '../src/App.css';
import desktopImg from './images/image-product-desktop.jpg';
import mobileImg from './images/image-product-mobile.jpg';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

const App = () => {
  return (
    <div className="product">
      <div className="product_container">
        <div className="product_img">
          <img className="desktop_img" src={desktopImg} alt="product" />

          <img className="mobile_img" src={mobileImg} alt="product" />
        </div>
        <div className="product_desc">
          <h4>PERFUME</h4>
          <h1>Gabrielle Essence Eau De Parfum</h1>
          <p>
            A floral, solar and voluptuous interpretation composed by Olivier
            Polge, Perfumer-Creator for the House of CHANEL.
          </p>
          <div className="product_price">
            <h1>$149.99</h1>
            <span>$169.99</span>
          </div>
          <button className="btn">
            <FontAwesomeIcon className="icon" icon={faShoppingCart} size="2x" />
            <span>Add to Cart</span>
          </button>
        </div>
      </div>
      <div className="attribution">
        Challenge by{" "}
        <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
          Frontend Mentor
        </a>
        . Coded by <a href="#">Hart Selwyn</a>.
      </div>
    </div>
  );
}

export default App
