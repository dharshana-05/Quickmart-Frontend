import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./Products.css";

const Products = ({ cart, setCart }) => {
  const [groceries, setGroceries] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://quickmart-grocery-backend-2.onrender.com/api/products");
        const data = await response.json();
        setGroceries(data);
      } catch (error) {
        console.error("Error fetching products:", error);
        const mockData = [
          { id: 1, name: "Fresh Apples", description: "Crisp apples.", price: 3.5, image: "https://images.contentstack.io/v3/assets/bltcedd8dbd5891265b/blt4bdddb90d9324fc3/667082fe01028f35d4668f1d/types-of-apples-hero.jpg?q=70&width=3840&auto=webp" },
          { id: 2, name: "Organic Spinach", description: "Nutritious spinach.", price: 2.0, image: "https://www.greendna.in/cdn/shop/files/palak2_1200x1200.jpg?v=1715600291" },
          { id: 3, name: "Carrots", description: "Sweet and crunchy carrots.", price: 1.2, image: "https://gourmetgarden.in/cdn/shop/products/Carrot_1280x.jpg?v=1737738505" },
        ];
        setGroceries(mockData);
      }
      setIsLoading(false);
    };
    fetchProducts();
  }, []);

  useEffect(() => {
    const query = new URLSearchParams(location.search).get("search");
    if (query) {
      setFilteredProducts(groceries.filter((product) => product.name.toLowerCase().includes(query.toLowerCase())));
    } else {
      setFilteredProducts(groceries);
    }
  }, [location.search, groceries]);

  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find((item) => item.id === product.id);

      if (existingProduct) {
        return prevCart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };

  return (
    <div className="products-page">
      <header className="products-header">
        <h1>Our Grocery Products</h1>
        <p>Explore our fresh groceries!</p>
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
                  <p><strong>Price: ₹{item.price}</strong></p>

                  <button className="add-to-cart-btn" onClick={() => addToCart(item)}>
                    Add to Cart
                  </button>

                  <button className="view-details-btn" onClick={() => navigate(`/product/${item.id}`, { state: { product: item } })}>
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
