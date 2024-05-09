import React, { useContext, useState} from "react";
import "./PlaceOrder.css";
import { StoreContext } from "../../context/StoreContext";


const PlaceOrder = () => {
  const { getTotalCartAmount } = useContext(StoreContext);
  const [isOrdering, setIsOrdering] = useState(false);

    const handleOrderClick = () => {
        // Simulate order completion process
        setIsOrdering(true);
        setTimeout(() => {
            // Navigate to the next page after 5 seconds
            window.location.href = '/';
        }, 3000);
    };
  

  return (
    <form className="place-order">
      <div className="place-order-left">
        <p className="title">Delivery Information</p>
        <div className="multi-fields">
          <input type="text" placeholder="First Name" />
          <input type="text" placeholder="Last Name" />
        </div>
        <input type="email" placeholder="Email address" />
        <input type="text" placeholder="Street" />
        <div className="multi-fields">
          <input type="text" placeholder="City" />
          <input type="text" placeholder="State" />
        </div>
        <div className="multi-fields">
          <input type="text" placeholder="Zip Code" />
          <input type="text" placeholder="Country" />
        </div>
        <input type="text" placeholder="Phone" />
      </div>
      <div className="place-order-right">
        <div className="cart-total">
          <h2>Cart Totals</h2>
          <div>
            <div className="cart-total-details">
              <p>Subtotal</p>
              <p>₹{getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Delivery Fee</p>
              <p>₹{getTotalCartAmount() === 0 ? 0 : 50}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <b>Total</b>
              <b>
                ₹{getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 50}
              </b>
            </div>
          </div>
          {/* <Link to="/"><button>PROCEED TO PAYMENT</button></Link> */}
          <button onClick={handleOrderClick} disabled={isOrdering}>
                {isOrdering ? 'Ordering...' : 'PROCEED TO PAYMENT'}
          </button>
        </div>
      </div>
    </form>
  );
};

export default PlaceOrder;
