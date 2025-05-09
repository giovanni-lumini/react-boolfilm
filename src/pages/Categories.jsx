import { useState, useEffect } from 'react'

import Card from '../components/card/Card'

import Header from '../components/Header'
import Footer from '../components/Footer'

export default function Categories() {

    //useState
    const [categories, setCategories] = useState([])

    const api_server = "http://localhost:8080/api/categories";

    //function for the api call to the server
    function fetchData(url = api_server) {
        fetch(url)
            .then((response) => response.json())
            .then((data) => {
                setCategories(data)
                console.log(data)

                // now film is an array of objects with the data from the server
                setCategories(data)
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
            <Header />

            <div className='p-5 shadow-lg'>
                <h2 className='mb-3'>Explore Film Categories</h2>
                <p>From pulse-pounding thrillers to heartwarming dramas, explore a diverse range of film genres. Find the perfect category to match your mood and discover new favorites. Let your cinematic journey begin!</p>
            </div>

            <div className='container mt-5'>
                <div class="row d-flex justify-content-start mb-4">
                    {/* map over the array of objects category and display them */}
                    {categories.map((category) => (
                        <div key={category.id} className='col-4'>
                            <div class="card mb-5">
                                <h5 class="card-header bg-secondary text-white">{category.name}</h5>
                                <div class="card-body">
                                    <p class="card-text mb-3" style={{ height: "4rem" }}>{category.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div >

            <Footer />
        </>
    );
};