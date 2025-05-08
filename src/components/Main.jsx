import { useState, useEffect } from 'react'

export default function Main() {

    //useState
    const [film, setFilm] = useState([])

    //function for the api call to the server
    function fetchData(url = "http://localhost:8080/api/film") {
        fetch(url)
            .then((response) => response.json())
            .then((data) => {
                setFilm(data)
                console.log(data)

                // now film is an array of objects with the data from the server
                setFilm(data)
            })
    }

    //useEffect
    useEffect(() => {
        fetchData()
    }, [])

    return (
        <>
            <div className='container'>
                <div className="row d-flex justify-content-start">

                    {/* map over the array of objects and display them */}
                    {film.map((film) => (
                        <div key={film.id} className="col text-center d-flex justify-content-center">
                            <div className="card mt-5" style={{ width: "15rem" }}>
                                <img src={film.image} className="card-img-top" alt="..." style={{ height: "22rem", objectFit: "cover" }} />
                                <div className="card-body">
                                    <h5 className="card-title">{film.title}</h5>
                                    <p style={{ height: "5rem" }}>{film.description}</p>
                                    <div className="d-flex justify-content-center gap-3">
                                        {/* details (show) */}
                                        <a th:href="@{/film/{id}(id=*{id})}" className="btn btn-sm btn-primary">Details</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};