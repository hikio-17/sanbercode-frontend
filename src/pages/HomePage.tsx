import BookCard from "../components/BookCard"
import CustomButton from "../components/CustomButton"
import CustomFilter from "../components/CustomFilter"
import Footer from "../components/Footer"
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

            <div className="w-full flex-center gap-5 mt-10">
              <CustomButton
                title='Show More'
                btnType='button'
                containerStyles='bg-primary-blue rounded-full text-white'
              />
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  )
}

export default HomePage