import { IoBookOutline, IoCalendarOutline, IoDocumentText } from "react-icons/io5";
import CustomButton from "./CustomButton";
import { useState } from "react";
import BookDetail from "./BookDetail";
import { BookItem } from './../types/index';

function BookCard({ book }: { book: BookItem }) {
   const [isOpen, setIsOpen] = useState(false);
   return (
      <div className='book-card group'>
         <img src={`${book.image_url}`} alt="book" className="rounded-3xl w-full" style={{ height: '350px' }} />
         <div className="px-3 mt-3">
            <h2 className="book-card__price">$ {book.price}</h2>
            <h5 className="book-card__content-title">{book.title}</h5>
         </div>
   
         <div className="relative flex w-full my-5 ">
            <div className="flex group-hover:invisible w-full justify-between text-gray px-5">
               <div className="flex flex-col justify-center items-center gap-2">
                  <IoBookOutline />
                  <p className='text-[14px]'>
                     {book.category_id}
                  </p>
               </div>
               <div className="flex flex-col justify-center items-center gap-2">
                  <IoCalendarOutline />
                  <p className='text-[14px]'>
                     {book.release_year}
                  </p>
               </div>
               <div className="flex flex-col justify-center items-center gap-2">
                  <IoDocumentText />
                  <p className='text-[14px]'>
                     {book.total_page} pages
                  </p>
               </div>
            </div>

            <div className="book-card__btn-container px-5">
               <CustomButton
                  title='View More'
                  containerStyles='w-full py-[16px] rounded-full bg-primary-blue'
                  textStyles='text-white text-[14px] leading-[17px] font-bold'
                  handleClick={() => setIsOpen(true)}
               />
            </div>
         </div>

         {isOpen && <BookDetail isOpen={isOpen} closeModal={() => setIsOpen(false)} book={book} />}
      </div>
   )
}

export default BookCard;
