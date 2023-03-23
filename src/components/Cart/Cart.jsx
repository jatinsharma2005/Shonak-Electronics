import { useContext } from "react";
import { MdClose } from "react-icons/md";
import { BsCartX } from "react-icons/bs";
import { Context } from "../../utils/context";
import { useNavigate } from "react-router-dom";

import { Link } from "react-router-dom";

import CartItem from "./CartItem/CartItem";

import "./Cart.scss";

const Cart = ({ setShowCart }) => {
  const { cartItems, cartSubTotal } = useContext(Context);
  const navigate = useNavigate();
  return (
    <div className="cart-panel">
      <div className="opac-layer"></div>
      <div className="cart-content">
        <div className="cart-header">
          <span className="heading">Shopping Cart</span>
          <span className="close-btn" onClick={() => setShowCart(false)}>
            <MdClose />
            <span className="text">close</span>
          </span>
        </div>

        {!cartItems?.length && (
          <div className="empty-cart">
            <BsCartX />
            <span>No product in cart</span>
            <button className="return-cta">RETURN TO SHOP</button>
          </div>
        )}

        {!!cartItems?.length && (
          <>
            <CartItem />
            <div className="cart-footer">
              <div className="subtotal">
                <span className="text">Subtotal:</span>
                <span className="text total">&#8377;{cartSubTotal}</span>
              </div>
              <Link to="/Payment">
                <div className="button">
                  <button
                    className="checkout-cta"
                    onClick={() => setShowCart(false)}
                  >
                    Checkout
                  </button>
                </div>
              </Link>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Cart;
