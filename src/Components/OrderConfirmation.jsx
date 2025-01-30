import React from "react";
import { useLocation } from "react-router-dom";

const OrderConfirmation = () => {
  const location = useLocation();
  const { cart } = location.state || {};  // Access the cart data passed in state

  return (
    <div className="order-confirmation">
      <h1>Order Confirmation</h1>
      {cart ? (
        <div>
          <h2>Your Order</h2>
          {cart.map((item) => (
            <div key={item.id}>
              <h3>{item.name}</h3>
              <p>Price: {item.price}</p>
              <p>Quantity: {item.quantity}</p>
            </div>
          ))}
          <h3>
            Total: ₹
            {cart
              .reduce((sum, item) => sum + item.quantity * parseFloat(item.price.slice(1)), 0)
              .toFixed(2)}
          </h3>
        </div>
      ) : (
        <p>No order details available.</p>
      )}
    </div>
  );
};

export default OrderConfirmation;
