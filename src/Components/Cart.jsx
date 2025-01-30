import React from "react";
import { useNavigate } from "react-router-dom";
import "./Cart.css";

const Cart = ({ cart, setCart }) => {
  const navigate = useNavigate();

  
  const addToCart = (product) => {
    setCart((prevCart) => {
      console.log("Prev Cart: ", prevCart); 
      const existingProduct = prevCart.find((item) => item.id === product.id);
  
      if (existingProduct) {
        console.log(`Product ${product.id} found, increasing quantity`);
        return prevCart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        console.log(`Adding new product: ${product.id}`);
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };
  

  // Remove item from cart
  const removeFromCart = (productId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId)); // Remove item by ID
  };

  // Increase quantity of a product
  const increaseQuantity = (productId) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  // Decrease quantity of a product
  const decreaseQuantity = (productId) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === productId && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  return (
    <div className="cart-page">
      <h1>Your Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty!</p>
      ) : (
        <div className="cart-items">
          {cart.map((item) => (
            <div className="cart-item" key={item.id}>
              <img src={item.image} alt={item.name} />
              <div className="cart-item-info">
                <h3>{item.name}</h3>
                <p>Price: ₹{item.price}</p>
                <div className="quantity-controls">
                  <button onClick={() => decreaseQuantity(item.id)}>-</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => increaseQuantity(item.id)}>+</button>
                </div>
                <button onClick={() => removeFromCart(item.id)}>Remove</button>
              </div>
            </div>
          ))}
        </div>
      )}

      <button onClick={() => navigate("/")}>Continue Shopping</button>
      <button onClick={() => alert("Proceeding to checkout!")}>Proceed to Checkout</button>
    </div>
  );
};

export default Cart;
