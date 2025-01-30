import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const ProductsPage = () => {
    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const productResponse = await fetch("http://127.0.0.1:8000/api/products/");
                const categoryResponse = await fetch("http://127.0.0.1:8000/api/categories/");

                if (!productResponse.ok || !categoryResponse.ok) {
                    throw new Error("Failed to fetch data");
                }

                const productData = await productResponse.json();
                const categoryData = await categoryResponse.json();

                setProducts(productData);
                setCategories(categoryData);
            } catch (err) {
                setError(err.message);
            }
        };

        fetchData();
    }, []);

    return (
        <div>
            <h2>All Products</h2>
            {error && <p style={{ color: "red" }}>Error: {error}</p>}
            <ul>
                {products.map((product) => (
                    <li key={product.id}>
                        {product.name} - {product.category?.name || "No Category"}
                    </li>
                ))}
            </ul>

            <h3>Categories</h3>
            <ul>
                {categories.map((category) => (
                    <li key={category.id}>
                        <Link to={`/category/${category.id}`}>{category.name}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ProductsPage;
