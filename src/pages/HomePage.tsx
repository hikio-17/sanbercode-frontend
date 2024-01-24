import BookCard from "../components/BookCard"
import CustomFilter from "../components/CustomFilter"
import Hero from "../components/Hero"
import Navbar from "../components/Navbar"
import SearchBar from "../components/SearchBar"
import { maxYear, minYear } from "../constants"

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

            <div className="home__filter-container">
              <CustomFilter title='Min Year' options={minYear} />
              <CustomFilter title='Max Year' options={maxYear} />
            </div>
          </div>

          <section>
            <div className="home__books-wrapper">
              <BookCard />
              <BookCard />
              <BookCard />
              <BookCard />
            </div>
          </section>
        </div>
      </main>
    </>
  )
}

export default HomePage