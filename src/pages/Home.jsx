import Header from '../components/Header'
import Footer from '../components/Footer'
import { Link, NavLink } from 'react-router';

export default function Home() {
    return (
        <>
            <Header />

            <main className="container m-auto" style={{ height: "calc(100vh - 15rem)" }}>
                <p className="my-5 fs-3">
                    Welcome to BoolFilm, a simple app where you can search, add, and edit movies with ease. Discover new titles or manage your own collection in just a few clicks!
                </p>

                <nav>
                    <NavLink to="/film" className="btn btn-primary">Go to the film page</NavLink>
                </nav>
            </main>

            <Footer />
        </>
    )
}