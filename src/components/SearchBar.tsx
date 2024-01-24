import { IoBookOutline } from "react-icons/io5"

function SearchBar() {
   return (
      <form className="searchbar">
         <div className="searchbar__item">
            <IoBookOutline 
               className="absolute w-[20px] h-[20px] ml-4"
            />

            <input 
               type="text"
               name="book"
               placeholder="Harry Potter"
               className="searchbar__input"
            />
         </div>
      </form>
   )
}

export default SearchBar