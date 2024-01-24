import { IoBookOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import CustomButton from "./CustomButton";

function Navbar() {
   return (
      <header className="w-full absolute z-10">
         <nav className="max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 px-6 py-4">
            <Link to="/" className="flex justify-center items-center">
               <IoBookOutline className="text-3xl" />
               <span className="ps-3">Bookshelf</span>
            </Link>

            <CustomButton 
               title="Sign In"
               btnType="button"
               containerStyles="text-primary-blue rounded-full bg-white min-w-[130px]"
            />
         </nav>
      </header>
   )
}

export default Navbar;