import { useParams } from "react-router-dom"
import { useState, useEffect } from 'react'

export default function FilmDetails() {

    const { id } = useParams();

    //useState
    const [film, setFilm] = useState({})

    const api_server = `http://localhost:8080/api/film/${id}`;

    //function for the api call to the server
    function fetchData(url = api_server) {
        fetch(url)
            .then((response) => response.json())
            .then((data) => {
                console.log(data)
                // now film is an array of objects with the data from the server
                setFilm(data)
            }).catch(error => {
                console.log(error.message)
            })
    }

    //useEffect
    useEffect(() => {
        fetchData()
    }, [])

    return (
        <>
            <div className="p-5 shadow-lg">
                <h2 className="mb-3">Film Overview</h2>
                <p>
                    Explore the story, discover the creative minds behind it, and dive into the world it brings to life.
                    Learn about the director, release year, captivating plot, and the genres that define this film.
                </p>
            </div>


            <div className='container m-auto'>
                {/* card */}
                <div className="mt-5">
                    <div className="d-flex justify-content-center" >
                        <img src={film.image} className="card-img-top" alt={film.title} style={{ width: "15rem", objectFit: "cover" }} />
                        <div className="card-body" style={{ marginLeft: "1.5rem" }}>
                            <h3 className="card-title mb-3">{film.title}</h3>
                            <div className="mt-2">
                                <strong>Author: </strong>{film.author}
                            </div>
                            <div className="mt-2">
                                <strong>Publication date: </strong>{film.publicationDate}
                            </div>
                            <div className="mt-2">
                                <strong>Description: </strong>{film.description}
                            </div>

                            {/* categories */}
                            <div className="mt-2">
                                <div className="mb-3">
                                    <strong>Categories</strong>
                                </div>
                                {/* map */}
                                {film.categories && film.categories.map((category) => (
                                    <span key={category.id} className="badge bg-secondary p-2" style={{ marginRight: "1rem", objectFit: "cover" }}>
                                        {category.name}
                                    </span>
                                ))}
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}