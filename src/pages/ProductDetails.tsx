import { useNavigate, useParams, Link } from "react-router-dom";
import { products } from "../data/products";

const ProductDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const product = products.find(product => product.id === Number(id));

    if (!product) {
        return (
            <div>
                <h2>Not found the product</h2>
                <button onClick={() => navigate(-1)}>
                    Back
                </button>
                <p>
                    <Link to="/products">Back to the catalog</Link>
                </p>
            </div>
        );
    }

    return (
        <div>
            <h2>{product.name}</h2>
            <p>ID: {product.id}</p>
            <p>Category: {product.category}</p>
            <p>Price: {product.price} UAH</p>
            <p>Description: {product.description}</p>

            <button onClick={() => navigate(-1)}>
                Back
            </button>
        </div>
    );
};

export default ProductDetails;
