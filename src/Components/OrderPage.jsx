import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const OrderPage = ({ cart }) => {
  const [updatedCart, setUpdatedCart] = useState(cart);
  const navigate = useNavigate();

  const handleQuantityChange = (index, action) => {
    const newCart = [...updatedCart];
    if (action === "increase") newCart[index].quantity++;
    if (action === "decrease" && newCart[index].quantity > 1) newCart[index].quantity--;
    setUpdatedCart(newCart);
  };

  const calculateTotal = () => {
    return updatedCart.reduce((sum, item) => sum + item.quantity * parseFloat(item.price.slice(1)), 0).toFixed(2);
  };

  const handleCheckout = () => {
    navigate("/order-confirmation", { state: { cart: updatedCart } });
  };

  return (
    <div className="order-page">
      <h1>Your Orders</h1>
      {updatedCart.length === 0 ? (
        <p>Your cart is empty!</p>
      ) : (
        <>
          {updatedCart.map((item, index) => (
            <div key={index} className="order-item">
              <h2>{item.name}</h2>
              <p>Price: {item.price}</p>
              <div className="quantity-controls">
                <button onClick={() => handleQuantityChange(index, "decrease")}>-</button>
                <span>{item.quantity}</span>
                <button onClick={() => handleQuantityChange(index, "increase")}>+</button>
              </div>
            </div>
          ))}
          <div className="total">
            <h2>Total: ₹{calculateTotal()}</h2>
          </div>
          <hr />
          <button className="checkout-button" onClick={handleCheckout}>Checkout</button>
        </>
      )}
    </div>
  );
};

export default OrderPage;
