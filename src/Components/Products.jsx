import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./Products.css";

const Products = ({ cart, setCart }) => {
  const [groceries, setGroceries] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true); // Loading state
  const location = useLocation();
  const navigate = useNavigate();

  // Fetching data from the backend API
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("http://localhost:3000/api/products");
        const data = await response.json();
        setGroceries(data);
        setIsLoading(false); // Stop loading once products are fetched
      } catch (error) {
        console.error("Error fetching products:", error);
        // Fallback to mock data if API request fails
        const mockData = [
          {
            id: 1,
            name: "Fresh Apples",
            description: "Crisp and juicy apples, perfect for snacking.",
            price: 3.5,
            quantity: 50,
            image: "https://images.contentstack.io/v3/assets/bltcedd8dbd5891265b/blt4bdddb90d9324fc3/667082fe01028f35d4668f1d/types-of-apples-hero.jpg?q=70&width=3840&auto=webp",
          },
          {
            id: 2,
            name: "Organic Spinach",
            description: "Rich in nutrients, ideal for salads and cooking.",
            price: 2.0,
            quantity: 30,
            image: "https://www.greendna.in/cdn/shop/files/palak2_1200x1200.jpg?v=1715600291",
          },
          {
            id: 3,
            name: "Whole Wheat Bread",
            description: "Freshly baked, made with 100% whole wheat.",
            price: 1.5,
            quantity: 20,
            image: "https://images.getrecipekit.com/20230728144103-md-100-whole-wheat-bread-11-1-of-1-scaled.jpg?aspect_ratio=4:3&quality=90&",
          },
          {
            id: 4,
            name: "Free-Range Eggs",
            description: "Pack of 12 large free-range eggs.",
            price: 4.0,
            quantity: 40,
            image: "https://i0.wp.com/valleypasturefarm.com/test/wp-content/uploads/2015/04/eggsforsale-e1584830771324.jpg?resize=1114%2C660&ssl=1",
          },
          {
            id: 5,
            name: "Carrots",
            description: "Crunchy and sweet, perfect for snacking or cooking.",
            price: 1.2,
            quantity: 60,
            image: "https://gourmetgarden.in/cdn/shop/products/Carrot_1280x.jpg?v=1737738505",
          },
        ];
    
        setGroceries(mockData);
        setIsLoading(false); // Stop loading once mock data is used
      }
    };
    fetchProducts();
  }, []);

  // Filter products based on search query from URL
  useEffect(() => {
    const query = new URLSearchParams(location.search).get("search");
    if (query) {
      const results = groceries.filter((product) =>
        product.name.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredProducts(results);
    } else {
      setFilteredProducts(groceries);
    }
  }, [location.search, groceries]);

  // Function to add item to the cart
  const addToCart = (product) => {
    // Check if the product already exists in the cart
    const existingProduct = cart.find((item) => item.id === product.id);

    if (existingProduct) {
      // If the product exists, update the quantity
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      // If the product doesn't exist, add it to the cart with quantity 1
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  return (
    <div className="products-page">
      <header className="products-header">
        <h1>Our Grocery Products</h1>
        <p>Explore our wide range of fresh and organic grocery items!</p>
      </header>

      {isLoading ? (
        <div className="loading">
          <p>Loading products...</p>
        </div>
      ) : (
        <section className="products-list">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((item) => (
              <div className="product-card" key={item.id}>
                <img src={item.image} alt={item.name} />
                <div className="product-info">
                  <h3>{item.name}</h3>
                  <p>{item.description}</p>
                  <p>
                    <strong>Price: ₹{item.price}</strong>
                  </p>
                  <p>Available Quantity: {item.quantity}</p>

                  {/* Add to Cart button */}
                  <button
                    className="add-to-cart-btn"
                    onClick={() => addToCart(item)} // Call addToCart function
                  >
                    Add to Cart
                  </button>

                  {/* View details button */}
                  <button
                    className="view-details-btn"
                    onClick={() => {
                      navigate(`/product/${item.id}`, {
                        state: { product: item },
                      });
                    }}
                  >
                    View Details
                  </button>
                </div>
              </div>
            ))
          ) : (
            <p>No products found.</p>
          )}
        </section>
      )}
    </div>
  );
};

export default Products;