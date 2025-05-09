import viteLogo from '/vite.svg'
import { NavLink } from 'react-router';

export default function Header() {
    return (
        <>
            <header className="text-center bg-dark text-white p-3 d-flex justify-content-between" style={{ height: "8rem", position: "sticky", top: "0", zIndex: "100" }}>
                <div className="d-flex align-items-center">
                    {/* img in public folder */}
                    <a href="/">
                        <img src={viteLogo} style={{ width: "5rem" }} />
                    </a>
                </div>
                {/* navbar for home, film, categories */}
                <nav className="navbar navbar-expand-lg">
                    <div className="container-fluid">
                        <div className="collapse navbar-collapse" id="navbarNavDropdown">
                            <nav className="navbar-nav ">
                                <NavLink to="/" className={({ isActive }) =>
                                    isActive ? "nav-link text-primary" : "nav-link text-white"
                                }>HOME</NavLink>
                                <NavLink to="/film" className={({ isActive }) =>
                                    isActive ? "nav-link text-primary" : "nav-link text-white"
                                }>FILM</NavLink>
                                <NavLink to="/categories" className={({ isActive }) =>
                                    isActive ? "nav-link text-primary" : "nav-link text-white"
                                }>CATEGORIES</NavLink>
                            </nav>
                        </div>
                    </div>
                </nav>
            </header >
        </>
    )
}