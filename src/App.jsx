import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'

import Home from './pages/Home'
import Film from './pages/Film'
import FilmDetails from './pages/FilmDetails'
import Categories from './pages/Categories'
import DefaultLayout from './components/DefaultLayout'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<DefaultLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/film" element={<Film />} />
            <Route path="/film/:id" element={<FilmDetails />} />
            <Route path="/categories" element={<Categories />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
