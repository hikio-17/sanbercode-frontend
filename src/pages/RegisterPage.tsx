/* eslint-disable @typescript-eslint/no-explicit-any */
import { IoBookOutline } from 'react-icons/io5';
import RegisterInput from '../components/RegisterInput';
import { Link, useNavigate } from 'react-router-dom';
import api from '../utils/api';
import { RegisterRequest } from '../types';
import SweetAlert from '../components/SweetAlert';

function RegisterPage() {
   const navigate = useNavigate();

   const onRegister = async ({ fullname, email, password }: RegisterRequest) => {
      try {
         const { status, message } = await api.register({ fullname, email, password })

         if (status === 'success') {
            SweetAlert({
               status,
               text: message,
            });
            navigate('/login');
         }
      } catch (error: any) {
         SweetAlert({
            status,
            text: error.message,
         });
      }
   }
   return (
      <>
         <section className="grid grid-cols-1 md:grid-cols-2 min-h-screen">
            <header className="grid place-content-center bg-teal-700 text-white">
               <h1 className="text-[200px]">
                  <IoBookOutline />
               </h1>
               <h2 className='text-center text-3xl'>BookShelf</h2>
            </header>
            <article className="p-16 grid grid-cols-1 place-content-center">
               <h2 className="text-3xl font-light mb-4">Create your account</h2>

               <RegisterInput register={onRegister} />
               <p className="text-sm">
                  Already have an account?
                  {' '}
                  <Link to="/login" className="text-teal-700">Login</Link>
               </p>
            </article>
         </section>
      </>
   )
}

export default RegisterPage;