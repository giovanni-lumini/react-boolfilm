export default function Card({ data }) {
    return (
        <>
            <div className="card mt-5" style={{ width: "15rem" }}>
                <img src={data.image} className="card-img-top" alt="..." style={{ height: "22rem", objectFit: "cover" }} />
                <div className="card-body">
                    <h5 className="card-title">{data.title}</h5>
                    <p style={{ height: "5rem" }}>{data.description}</p>
                    <div className="d-flex justify-content-center gap-3">
                        {/* details (show) */}
                        <a th:href="@{/film/{id}(id=*{id})}" className="btn btn-sm btn-primary">Details</a>
                    </div>
                </div>
            </div>
        </>
    );
}