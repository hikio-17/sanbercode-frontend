/* eslint-disable @typescript-eslint/no-explicit-any */
import { IoBookOutline } from "react-icons/io5";
import LoginInput from "../components/LoginInput";
import { Link, useNavigate } from "react-router-dom";
import { LoginRequest } from "../types";
import api from "../utils/api";
import SweetAlert from "../components/SweetAlert";

function LoginPage() {
   const navigate = useNavigate();

   const onLogin = async ({ email, password }: LoginRequest)=> {
      try {
         const { status, message } = await api.login({ email, password });

         if (status === 'success') {
            SweetAlert({
               status,
               text: message,
            });

            navigate('/');
         }
      } catch (error: any) {
         SweetAlert({
            status: 'error',
            text: error.message
         })
      }
   }

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

            <LoginInput login={onLogin} />
            <p className="text-sm">
               Don&apos;t have an account?
               <Link to="/register" className="text-teal-700"> Register</Link>
            </p>
         </article>
      </section>
   )
}

export default LoginPage;