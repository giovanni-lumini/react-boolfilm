import { useState } from 'react'
import './App.css'

function App() {

  const [film, setFilm] = useState([])

  //function for the ajax call to the server
  function fetchData(url = "http://localhost:8080/api/film") {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setFilm(data)
        // console.log(data)

        // now film is an array of objects with the data from the server
        setFilm(data)
      })
  }

  //function for the click on the buttun
  function handleClick(e) {
    e.preventDefault()
    fetchData();
  }

  return (
    <>
      <h2>Film</h2>
      <button type='button' onClick={handleClick} className='btn btn-primary'>Fetch Data</button>
    </>
  )
}

export default App
