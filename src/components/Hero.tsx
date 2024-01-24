import CustomButton from "./CustomButton";

function Hero() {
   const handleScroll = () => {
      //
   }
   return (
      <div className="hero">
         <div className="flex-1 pt-36 padding-x">
            <h1 className="hero__title">
               Discover, Explore, Dive into the World of Knowledge — Swiftly and Seamlessly
            </h1>

            <p className="hero__subtitle">
               Simplify your book exploration journey with our effortless cataloging process. Uncover literary treasures and embark on a reading adventure with ease.
            </p>

            <CustomButton
               title="Explore Cars"
               containerStyles="bg-primary-blue text-white rounded-full mt-10"
               handleClick={handleScroll}
            />
         </div>

         <div className="hero__image-container">
            <div className="hero__image">
               <img src="book.png" alt="book" className="object-contain w-100" />
            </div>

            <div className="hero__image-overlay" />
         </div>
      </div>
   )
}

export default Hero;