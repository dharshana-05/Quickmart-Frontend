import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const CategoryDetails = () => {
  const { categoryId } = useParams(); 
  const [category, setCategory] = useState(null);
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]); // State to manage cart items

  useEffect(() => {
    console.log("Category ID:", categoryId);

    const fetchCategoryDetails = async () => {
      try {
        const response = await fetch(`http://localhost:3000/api/categories/${categoryId}`);
        const data = await response.json();

        console.log("Fetched data:", data);

        setCategory(data.category); 
        setProducts(data.products); 
      } catch (error) {
        console.error("Error fetching category details:", error);
      }
    };

    fetchCategoryDetails();
  }, [categoryId]); 

  // Function to handle adding product to cart
  const addToCart = (product) => {
    setCart([...cart, product]);
    alert(`${product.name} has been added to your cart!`);
  };

  if (!category) return <p>Loading...</p>;

  return (
    <div className="category-details">
      <h1>{category.name}</h1>
      <p>{category.description}</p>

      <div className="products-list">
        {products.length > 0 ? (
          products.map((product) => (
            <div key={product.id} className="product-card">
              <img src={product.image} alt={product.name} />
              <h3>{product.name}</h3>
              <p>{product.price}</p>
              <div className="product-buttons">
                <button
                  className="add-to-cart-btn"
                  onClick={() => addToCart(product)} // Call addToCart with the current product
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))
        ) : (
          <p>No products found in this category.</p>
        )}
      </div>
    </div>
  );
};

export default CategoryDetails;
