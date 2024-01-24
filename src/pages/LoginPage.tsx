import { IoBookOutline } from "react-icons/io5";
import LoginInput from "../components/LoginInput";

function LoginPage() {
   return (
      <section className="grid grid-cols-1 md:grid-cols-2 min-h-screen">
         <header className="grid place-content-center bg-teal-700 text-white" mb-4>
            <h1 className="text-[200px]"><IoBookOutline /></h1>
            <h2 className="text-center text-3xl">BookShelf</h2>
         </header>
         <article className="p-16 grid grid-cols-1 place-content-center">
            <h2 className="text-4xl leading-12 font-light mb-4">
               Explore the <strong className="font-bold">Bookshelf</strong> of Infinite Possibilities
            </h2>

            <LoginInput />
            <p className="text-sm">
               Don&apos;t have an account?
               <a href="/register" className="text-teal-700">Register</a>
            </p>
         </article>
      </section>
   )
}

export default LoginPage;