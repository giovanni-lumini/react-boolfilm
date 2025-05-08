import viteLogo from '/vite.svg'

export default function Header() {
    return (
        <>
            <header className="text-center bg-dark text-white p-3 d-flex justify-content-between mb-3" style={{ height: "8rem", position: "sticky", top: "0", zIndex: "100" }}>
                <div className="d-flex align-items-center">
                    {/* img in public folder */}
                    <a href="">
                        <img src={viteLogo} style={{ width: "5rem" }} />
                    </a>
                </div>
                {/* navbar for home, film, categories */}
                <nav className="navbar navbar-expand-lg">
                    <div className="container-fluid">
                        <div className="collapse navbar-collapse" id="navbarNavDropdown">
                            <ul className="navbar-nav ">
                                <li className="nav-item">
                                    <a className="nav-link active text-white" aria-current="page" href="">HOME</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link active text-white" href="">FILM</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link active text-white" href="">CATEGORIES</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header >
        </>
    );
}