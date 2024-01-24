import Hero from "../components/Hero"
import Navbar from "../components/Navbar"
import SearchBar from "../components/SearchBar"

const HomePage = () => {
  return (
    <>
      <Navbar />
      <main className="overflow-hidden">
        <Hero />

        <div className="mt-12 padding-x padding-y max-width">
          <div className="home__text-container">
            <h1 className="text-4xl font-extrabold">
              Book Catalogue
            </h1>
            <p>Explore the books you might like</p>
          </div>

          <div className="home__filters">
            <SearchBar />
          </div>
        </div>
      </main>
    </>
  )
}

export default HomePage