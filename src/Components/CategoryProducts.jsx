import React, { useState } from "react";
import { useParams } from "react-router-dom";
import "./CategoryProducts.css";

const CategoryProducts = () => {
  const { categoryName } = useParams(); 

  const products = [
    { id: 1, name: "Apple", category: "Fruits & Vegetables", price: 100, image: "https://images.contentstack.io/v3/assets/bltcedd8dbd5891265b/blt4bdddb90d9324fc3/667082fe01028f35d4668f1d/types-of-apples-hero.jpg?q=70&width=3840&auto=webp" },
    { id: 2, name: "Carrot", category: "Fruits & Vegetables", price: 50, image: "https://gourmetgarden.in/cdn/shop/products/Carrot_1280x.jpg?v=1737738505" },
    { id: 3, name: "Milk", category: "Dairy Products", price: 60, image: "https://static.toiimg.com/thumb/msid-114346974,width-1280,height-720,resizemode-4/114346974.jpg" },
    { id: 4, name: "Bread", category: "Bakery", price: 35, image: "https://images.getrecipekit.com/20230728144103-md-100-whole-wheat-bread-11-1-of-1-scaled.jpg?aspect_ratio=4:3&quality=90&" },
    { id: 5, name: "Organic Green Peas Frozen", category: "Frozen Foods", price: 20, image: "https://www.greendna.in/cdn/shop/products/frozenpeas2_600x.webp?v=1680072452" },
    { id: 6, name: "Banana", category: "Fruits & Vegetables", price: 40, image: "https://www.jiomart.com/images/product/original/590000454/banana-robusta-1-kg-product-images-o590000454-p590000454-0-202410011654.jpg?im=Resize=(420,420)" },
    { id: 7, name: "Tomato", category: "Fruits & Vegetables", price: 30, image: "https://www.bigbasket.com/media/uploads/p/l/50000557_10-fresho-tomato-hybrid-organically-grown.jpg" },
    { id: 8, name: "Cheese", category: "Dairy Products", price: 150, image: "https://m.media-amazon.com/images/I/61+AzywctoL._AC_UF894,1000_QL80_.jpg" },
    { id: 9, name: "Butter", category: "Dairy Products", price: 120, image: "https://sallysbakingaddiction.com/wp-content/uploads/2016/06/salted-vs-unsalted-butter-2.jpg" },
    { id: 10, name: "Cake", category: "Bakery", price: 250, image: "https://www.mybakingaddiction.com/wp-content/uploads/2023/06/chocolate-strawberry-cake-on-stand-hero-500x500.jpg" },
    { id: 11, name: "Croissant", category: "Bakery", price: 60, image: "https://lafolie.in/cdn/shop/products/BreadsBUTTERCROISSANTS_IMAGE2_1024x1024.jpg?v=1648871778" },
    { id: 12, name: "Frozen Corn", category: "Frozen Foods", price: 25, image: "https://www.jiomart.com/images/product/original/490066907/safal-frozen-sweet-corn-500-g-product-images-o490066907-p590114818-0-202306041208.jpg" },
    { id: 13, name: "Strawberries", category: "Fruits & Vegetables", price: 200, image: "https://upload.wikimedia.org/wikipedia/commons/2/29/PerfectStrawberry.jpg" },
    { id: 14, name: "Yogurt", category: "Dairy Products", price: 50, image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Turkish_strained_yogurt.jpg/220px-Turkish_strained_yogurt.jpg" },
    { id: 15, name: "Bagel", category: "Bakery", price: 40, image: "https://www.justspices.co.uk/media/opti_image/webp/recipe/resized/510x510/recipe/Avocado_Topping_Avocado_Bagel-3.webp" },
    { id: 15, name: "Mango juice", category: "Snacks & Beverages", price: 40, image: "https://myfoodstory.com/wp-content/uploads/2024/05/Mango-Juice-4-500x500.jpg" },
    { id: 16, name: "Chips", category: "Snacks & Beverages", price: 10, image: "https://india.neelamfoodland.in/cdn/shop/products/IMG_3641_800x.jpg?v=1734379499" },
  ];

  // Normalize category names to ensure case-insensitive match
  const filteredProducts = products.filter(
    (product) => product.category.toLowerCase() === decodeURIComponent(categoryName).toLowerCase()
  );

  // Add to cart function
  const addToCart = (product) => {
    setCart([...cart, product]);
    alert(`${product.name} has been added to your cart!`);
  };

  return (
    <div className="category-products-page">
      <h1>{categoryName}</h1>
      {filteredProducts.length > 0 ? (
        <div className="products-grid">
          {filteredProducts.map((product) => (
            <div key={product.id} className="product-card">
              <img src={product.image} alt={product.name} className="product-image" />
              <div className="product-info">
                <h3>{product.name}</h3>
                <p>Price: ₹{product.price}</p>
              </div>
              <div className="product-buttons">
                <button className="add-to-cart-btn" onClick={() => addToCart(product)}>
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="no-products">No products found in this category.</p>
      )}
    </div>
  );
};

export default CategoryProducts;
