import { Link, NavLink } from 'react-router';

export default function Card({ data }) {
    return (
        <>
            <div className="card mt-5 shadow-lg" style={{ width: "15rem" }}>
                <img src={data.image} className="card-img-top" alt="..." style={{ height: "22rem", objectFit: "cover" }} />
                <div className="card-body">
                    <h5 className="card-title">{data.title}</h5>
                    <p style={{ height: "5rem" }}>{data.description}</p>
                    {/* categories */}
                    <div className="mb-3">
                        {data.categories.map((category) => (
                            <span key={category.id} className="badge bg-secondary m-1 p-2">
                                {category.name}
                            </span>
                        ))}
                    </div>

                    <nav className="d-flex justify-content-center gap-3">
                        {/* details (show) */}
                        <NavLink to="/film_details" className="btn btn-primary">Details</NavLink>
                    </nav>
                </div>
            </div>
        </>
    );
}