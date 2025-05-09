import { useState, useEffect } from 'react'

import Card from '../components/card/Card'

export default function Film() {

    //useState
    const [film, setFilm] = useState([])

    const api_server = "http://localhost:8080/api/film";

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
            <div className='p-5 shadow-lg'>
                <h2 className='mb-3'>Find Your Favorite Film</h2>
                <p>Explore a world of cinematic wonders. Discover timeless classics, hidden gems, and the latest blockbusters. Dive deep into captivating stories, unforgettable characters, and breathtaking moments.</p>
            </div>


            <div className='container m-auto'>
                <div className="row d-flex">
                    <div className="row m-auto d-flex justify-content-start mb-4">
                        {/* map over the array of objects film and display them */}
                        {film.map((film) => (
                            <div key={film.id} className="col-4 text-center d-flex justify-content-center">
                                <Card data={film}></Card>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </>
    )
};