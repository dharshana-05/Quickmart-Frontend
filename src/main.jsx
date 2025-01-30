import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import GroceryManagementSystem from "./App";
import Products from "./Components/Products";
import Categories from "./Components/Categories";
import CategoryDetails from "./Components/CategoryDeatils";
import MainLayout from "./Components/MainLayout";
import Contact from "./Components/Contact";
import Login from "./Components/Login";
import Signup from "./Components/SignUp";
import ProductDetails from "./Components/ProductDetails";
import OrderPage from "./Components/OrderPage";
import OrderConfirmation from "./Components/OrderConfirmation";
import ProductsPage from "./Components/ProductPage";
import Cart from "./Components/Cart";


const App = () => {
  // Initialize cart state
  const [cart, setCart] = useState([
    
  ]);

  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/products/")
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <Router>
      {/* Main Layout wraps all routes for consistent header/footer/sidebar */}
      <MainLayout>
        <Routes>
          {/* Routes for the application */}
          <Route path="/" element={<GroceryManagementSystem />} />
          <Route path="/products" element={<Products cart={cart} setCart={setCart} />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/order" element={<OrderPage cart={cart} />} />
          <Route path="/order-confirmation" element={<OrderConfirmation />} />
          <Route path="/cart" element={<Cart cart={cart} setCart={setCart} />} />
          <Route path="/products" element={<Products cart={cart} setCart={setCart} />} />
          <Route path="/categories/:categoryId" element={<CategoryDetails />} />

        </Routes>
      </MainLayout>
    </Router>
  );
};

// Root element rendering
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
