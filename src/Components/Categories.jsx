import React from "react";
import { useNavigate } from "react-router-dom";
import "./Categories.css";


const Categories = () => {
  const navigate = useNavigate();

  const categories = [
    {
      id: 1,
      name: "Fruits & Vegetables",
      description: "Fresh and organic produce straight from the farm.",
      image: "https://san-j.com/wp-content/uploads/2024/02/01-healthiest-fruits-vegetables-REV02.jpg",
    },
    {
      id: 2,
      name: "Dairy Products",
      description: "High-quality milk, cheese, and other dairy essentials.",
      image: "https://www.chanakyadairy.com/wp-content/uploads/2019/04/blog-pic.jpg",
    },
    {
      id: 3,
      name: "Bakery",
      description: "Freshly baked bread, cakes, and pastries.",
      image: "https://indusfood.co.in/wp-content/uploads/2024/09/Indusfood_Image20240927.jpg",
    },
    {
      id: 4,
      name: "Snacks & Beverages",
      description: "Your favorite snacks and refreshing drinks.",
      image: "https://img.freepik.com/premium-photo/assorted-snacks-beverages-displayed-table-perfect-food-beverage-concepts_153912-132267.jpg?w=740",
    },
    {
      id: 5,
      name: "Frozen Foods",
      description: "Convenient and delicious frozen meals and desserts.",
      image: "https://cool-simple.com/cdn/shop/articles/88b703198fe3ad51308b02c2d9b2f7a6.jpg?v=1715101629&width=1200",
    },
  ];

  return (
    <div className="categories-page">
      <header className="categories-header">
        <h1>Our Categories</h1>
        <p>Browse through a variety of grocery categories to find what you need!</p>
      </header>

      <section className="categories-list">
        {categories.map((category) => (
          <div className="category-card" key={category.id}>
            <img src={category.image} alt={category.name} />
            <div className="category-info">
              <h3>{category.name}</h3>
              <p>{category.description}</p>
 
<button
  className="explore-btn"
  onClick={() => navigate(`/categories/${category.id}`)}  >
  Explore {category.name}
</button>


            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Categories;