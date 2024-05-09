import React, { useContext, useState } from "react";
import "./PlaceOrder.css";
import { StoreContext } from "../../context/StoreContext";

const PlaceOrder = () => {
  const { getTotalCartAmount } = useContext(StoreContext);
  const [isOrdering, setIsOrdering] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    street: "",
    city: "",
    state: "",
    zipCode: "",
    country: "",
    phone: ""
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleOrderClick = () => {
    // Check if any required field is empty
    const requiredFields = ["firstName", "lastName", "email", "street", "city", "state", "zipCode", "country", "phone"];
    const emptyFields = requiredFields.filter(field => !formData[field].trim());
    
    if (emptyFields.length > 0) {
      const emptyFieldsNames = emptyFields.join(", ");
      alert(`Please fill in all required fields: ${emptyFieldsNames}`);
      return;
    }

    setIsOrdering(true);
    setTimeout(() => {
      alert('Place Order complete!');
      window.location.href = '/';
    }, 5000);
  };

  return (
    <form className="place-order">
      <div className="place-order-left">
        <p className="title">Delivery Information</p>
        <div className="multi-fields">
          <input
            type="text"
            placeholder="First Name"
            name="firstName"
            value={formData.firstName}
            onChange={handleInputChange}
            required
          />
          <input
            type="text"
            placeholder="Last Name"
            name="lastName"
            value={formData.lastName}
            onChange={handleInputChange}
            required
          />
        </div>
        <input
          type="email"
          placeholder="Email address"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          required
        />
        <input
          type="text"
          placeholder="Street"
          name="street"
          value={formData.street}
          onChange={handleInputChange}
          required
        />
        <div className="multi-fields">
          <input
            type="text"
            placeholder="City"
            name="city"
            value={formData.city}
            onChange={handleInputChange}
            required
          />
          <input
            type="text"
            placeholder="State"
            name="state"
            value={formData.state}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="multi-fields">
          <input
            type="text"
            placeholder="Zip Code"
            name="zipCode"
            value={formData.zipCode}
            onChange={handleInputChange}
            required
          />
          <input
            type="text"
            placeholder="Country"
            name="country"
            value={formData.country}
            onChange={handleInputChange}
            required
          />
        </div>
        <input
          type="text"
          placeholder="Phone"
          name="phone"
          value={formData.phone}
          onChange={handleInputChange}
          required
        />
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
          <button onClick={handleOrderClick} disabled={isOrdering}>
            {isOrdering ? 'Ordering...' : 'PROCEED TO PAYMENT'}
          </button>
        </div>
      </div>
    </form>
  );
};

export default PlaceOrder;
