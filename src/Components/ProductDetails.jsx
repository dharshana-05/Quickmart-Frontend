import React, { useState, useEffect } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import './ProductDetails.css';

const ProductDetails = () => {
  const { id } = useParams();  
  const location = useLocation(); 
  const [product, setProduct] = useState(location.state?.product || null); 
  const navigate = useNavigate();

  useEffect(() => {
    if (!product) {
      
      const fetchProduct = async () => {
        try {
          const response = await fetch(`https://quickmart-grocery-backend-2.onrender.com/api/products/${id}`);
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