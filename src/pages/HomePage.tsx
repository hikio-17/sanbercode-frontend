/* eslint-disable @typescript-eslint/no-explicit-any */
import { useDispatch, useSelector } from "react-redux"
import BookCard from "../components/BookCard"
import CustomButton from "../components/CustomButton"
import CustomFilter from "../components/CustomFilter"
import Footer from "../components/Footer"
import Hero from "../components/Hero"
import Navbar from "../components/Navbar"
import SearchBar from "../components/SearchBar"
import { maxYear, minYear } from "../constants"
import { useEffect, useState } from "react"
import { asynCAddBook, asyncReceiveAllBook, asyncRemoveBookById } from "../stores/books/action"
import { BookItem } from './../types/index';
import AddBook from "../components/AddBook"
import { asyncAddCategory, asyncReceiveAllCategories } from "../stores/categories/action"
import FilterCategory from "../components/FilterCategory"
import AddCategory from "../components/AddCategory"

const HomePage = () => {
  const {
    books = [],
    categories = [],
  } = useSelector((states) => states);
  const dispatch = useDispatch();

  const [isOpenAdd, setIsOpenAdd] = useState(false);
  const [isOpenAddCategory, setIsOpenAddCategory] = useState(false);

  useEffect(() => {
    dispatch(asyncReceiveAllBook());
    dispatch(asyncReceiveAllCategories());
  }, [dispatch])

  const onRemoveBook = (bookId: number) => {
    dispatch(asyncRemoveBookById(bookId));
  }

  const onAddBook = (book: BookItem) => {
    dispatch(asynCAddBook(book))
  }

  const onAddCategory = (name: string) => {
    dispatch(asyncAddCategory(name));
  }

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
              <FilterCategory title="Category" options={categories} />
              <CustomFilter title='Min Year' options={minYear} />
              <CustomFilter title='Max Year' options={maxYear} />
            </div>

            <div className="grid grid-cols-2 place-content-end gap-3">
              <CustomButton
                title="Add Book"
                containerStyles="bg-blue-700 rounded-xl"
                textStyles="text-white"
                handleClick={() => setIsOpenAdd(true)}
              />
              <CustomButton
                title="Add Category"
                containerStyles="bg-blue-700 rounded-xl"
                textStyles="text-white"
                handleClick={() => setIsOpenAddCategory(true)}
              />
            </div>

          </div>

          <section>
            <div className="home__books-wrapper">
              {books.map((book: BookItem) => (
                <BookCard book={book} key={book.id} remove={onRemoveBook} />
              ))}
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

        {isOpenAdd && <AddBook isOpenAdd={isOpenAdd} closeModalAdd={() => setIsOpenAdd(false)} addBook={onAddBook} />}
        {isOpenAddCategory && <AddCategory isOpenAddCategory={isOpenAddCategory} closeModalAddCategory={() => setIsOpenAddCategory(false)} addCategory={onAddCategory} />}
      </main>
      <Footer />
    </>
  )
}

export default HomePage