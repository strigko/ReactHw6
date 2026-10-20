import { NavLink, Outlet } from "react-router-dom";

const MainLayout = () => {
    return (
        <div className="layout">
            <header className="header">
                <h1>TechStore</h1>

                <nav>
                    <NavLink to="/" end>
                        Main
                    </NavLink>

                    <NavLink to="/products">
                        Catalog
                    </NavLink>
                </nav>
            </header>

            <main className="content">
                <Outlet />
            </main>

            <footer className="footer">
                TechStore © 2026
            </footer>
        </div>
    );
};

export default MainLayout;
