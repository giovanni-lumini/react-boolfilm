import { useState, useEffect } from 'react'

import Card from './card/Card'

export default function Main() {

    //useState
    const [film, setFilm] = useState([])

    const api_server = "http://localhost:8080/api/fil";

    //function for the api call to the server
    function fetchData(url = api_server) {
        fetch(url)
            .then((response) => response.json())
            .then((data) => {
                setFilm(data)
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
            <div className='container'>
                <div className="row d-flex justify-content-start">

                    {/* map over the array of objects film and display them */}
                    {film.map((film) => (
                        <div key={film.id} className="col text-center d-flex justify-content-center">
                            <Card data={film}></Card>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};