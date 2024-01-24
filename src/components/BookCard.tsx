import { IoBookOutline, IoCalendarOutline, IoDocumentText } from "react-icons/io5";
import CustomButton from "./CustomButton";

function BookCard() {
   return (
      <div className='book-card group h-fit'>
         <img src="harry-potter.jpg" alt="book" className="rounded-3xl w-full" style={{ height: '350px' }} />
         <div className="px-3 mt-3">
            <h2 className="book-card__price">$ 30, 00</h2>
            <h5 className="book-card__content-title">Harry Potter and the Chamber of Secrets</h5>
         </div>
         <div className="relative flex w-full my-5 ">
            <div className="flex group-hover:invisible w-full justify-between text-gray px-5">
               <div className="flex flex-col justify-center items-center gap-2">
                  <IoBookOutline />
                  <p className='text-[14px]'>
                     Fantasy
                  </p>
               </div>
               <div className="flex flex-col justify-center items-center gap-2">
                  <IoCalendarOutline />
                  <p className='text-[14px]'>
                     1998
                  </p>
               </div>
               <div className="flex flex-col justify-center items-center gap-2">
                  <IoDocumentText />
                  <p className='text-[14px]'>
                     388 pages
                  </p>
               </div>
            </div>

            <div className="book-card__btn-container px-5">
               <CustomButton
                  title='View More'
                  containerStyles='w-full py-[16px] rounded-full bg-primary-blue'
                  textStyles='text-white text-[14px] leading-[17px] font-bold'
               />
            </div>
         </div>
      </div>
   )
}

export default BookCard;