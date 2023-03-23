import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./Payment.scss";
import { useContext } from "react";
import axios from "axios";
import { Context } from "../../../utils/context";
import { useState } from "react";

import CartItem from "../CartItem/CartItem";
import cartItems from "../CartItem/CartItem";
import item from "../CartItem/CartItem";

export const Payment = () => {
  const [fullName, setFullName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [emailAdd, setEmailAdd] = useState("");
  const [shippingAdd, setShippingAdd] = useState("");
  const [checkbox, setCheckbox] = useState(false);
  const [Error, setError] = useState(false);
  const { cartItems, cartSubTotal } = useContext(Context);

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    if (
      fullName.length == 0 ||
      phoneNumber.length == 0 ||
      emailAdd.length == 0 ||
      shippingAdd.length == 0
    ) {
      setError(true);
    } else {
      emailjs
        .sendForm(
          "service_u1k9g0p",
          "template_9xkgz9u",
          form.current,
          "bV3mXXg-s9rsfJvdr"
        )
        .then(
          (result) => {
            console.log(result.text);
            console.log(
              "Order place, Our team call you for finall confiormation "
            );
          },
          (error) => {
            console.log(error.text);
          }
        );
    }
  };

  return (
    <div>
      <div className="headline">
        confirm your order
        <div className="col-5">
          <br />
          <br />

          <br />
          <form className="form" ref={form} onSubmit={sendEmail}>
            <CartItem />
            <div className="subtotal">
              <span className="text">Subtotal:</span>
              <span className="text total">&#8377;{cartSubTotal}</span>
            </div>
            {cartItems.map((item) => (
              <input className="hide" value={item.id} name="Product_id" />
            ))}
            {cartItems.map((item) => (
              <input
                className="hide"
                value={item.attributes.quantity}
                name="Product_Quantity"
              />
            ))}
            {cartItems.map((item) => (
              <input
                className="hide"
                value={item.attributes.price * item.attributes.quantity}
                name="Product_price"
              />
            ))}

            <input className="hide" value={cartSubTotal} name="Total_price" />

            <label for="exampleInputname" class="form-label">
              Full Name
            </label>
            <input
              type="text"
              class="form-control"
              name="Cous_name"
              onChange={(e) => setFullName(e.target.value)}
            />

            {Error && fullName.length <= 0 ? <label>can't be empty</label> : ""}

            <label for="exampleInputname" class="form-label">
              Phone number
            </label>
            <input
              type="text"
              class="form-control"
              name="Cous_phone_no"
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
            {Error && phoneNumber.length <= 0 ? (
              <label>can't be empty</label>
            ) : (
              ""
            )}
            {Error && phoneNumber.length <= 9 ? (
              <label>only 10 digit</label>
            ) : (
              ""
            )}
            {Error && phoneNumber.length >= 11 ? (
              <label>only 10 digit</label>
            ) : (
              ""
            )}

            <label for="exampleFormControlInput1" class="form-label">
              Email address
            </label>
            <input
              type="email"
              class="form-control"
              placeholder="mailId@example.com"
              name="Cous_mail"
              onChange={(e) => setEmailAdd(e.target.value)}
            />

            {Error && emailAdd.length <= 0 ? <label>can't be empty</label> : ""}

            <label for="exampleFormControladdress" class="form-label">
              Shipping address
            </label>
            <textarea
              class="form-control"
              rows="3"
              name="Cous_Address"
              onChange={(e) => setShippingAdd(e.target.value)}
            ></textarea>
            {Error && shippingAdd.length <= 0 ? (
              <label>can't be empty</label>
            ) : (
              ""
            )}

            <br />
            <br />
            <div className="check-c">
              <input
                class="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
                onChange={(e) => setCheckbox(e.target.checked)}
              />

              <div className="privay">
                check our
                <a href="https://www.privacypolicygenerator.info/live.php?token=5TYO3Uyf05cIlJWyyGive4edGJdeg9u6">
                  Privacy Policy
                </a>
                &
                <a href="https://www.termsandconditionsgenerator.com/live.php?token=ADFkklGBIqc7etKWKTeBbe1gvBxuxbG7">
                  Terms and Conditions
                </a>
                .
              </div>
            </div>
            <button type="Submit" class="btn btn-dark" value="send">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Payment;
