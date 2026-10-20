import { Link, useSearchParams } from "react-router-dom";
import { products } from "../data/products";

const Products = () => {
    const [searchParams, setSearchParams] = useSearchParams();

    const category = searchParams.get("category");

    const filteredProducts = category
        ? products.filter(product => product.category === category)
        : products;

    const changeCategory = (category: string) => {
        if (category === "All") {
            setSearchParams({});
        } else {
            setSearchParams({ category });
        }
    };

    return (
        <div>
            <h2>Product Catalog</h2>

            <div className="filters">
                <button onClick={() => changeCategory("All")}>
                    All
                </button>

                <button onClick={() => changeCategory("Phones")}>
                    Phones
                </button>

                <button onClick={() => changeCategory("Laptops")}>
                    Laptops
                </button>
            </div>

            <div className="productList">
                {filteredProducts.map(product => (
                    <div className="productCard" key={product.id}>
                        <h3>{product.name}</h3>
                        <p>Price: {product.price} UAH</p>

                        <Link to={`/products/${product.id}`}>
                            More
                        </Link>
                    </div>
                ))}
            </div>

            {filteredProducts.length === 0 && (
                <p>No prices in this category</p>
            )}
        </div>
    );
};

export default Products;
