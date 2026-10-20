import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div>
            <h2>Welcome to TechStore!</h2>
            <p>Here u can find phones and laptops.</p>

            <Link to="/products" className="button">
                To catalog
            </Link>
        </div>
    );
};

export default Home;
