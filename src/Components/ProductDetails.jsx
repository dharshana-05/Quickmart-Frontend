import React, { useState, useEffect } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import './ProductDetails.css';

const ProductDetails = () => {
  const { id } = useParams();  // Get the product id from the URL (if you still want to fetch from the backend)
  const location = useLocation(); // Get the state passed via navigation
  const [product, setProduct] = useState(location.state?.product || null); // Check if product is in state
  const navigate = useNavigate();

  useEffect(() => {
    if (!product) {
      // If product is not passed via state, fetch it from the backend using id
      const fetchProduct = async () => {
        try {
          const response = await fetch(`http://localhost:3000/api/products/${id}`);
          const data = await response.json();
          setProduct(data); // Set product from the fetched data
        } catch (error) {
          console.error("Error fetching product details:", error);
        }
      };
      fetchProduct();
    }
  }, [id, product]);

  if (!product) {
    return <p>Product not found!</p>;
  }

  return (
    <div className="product-details">
      <button className="back-btn" onClick={() => navigate(-1)}>Back to Products</button>

      <div className="product-box">
        <img src={product.image} alt={product.name} />
        <div className="product-info">
          <h2>{product.name}</h2>
          <p>{product.description}</p>
          <p className="price">Price: ₹{product.price}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;