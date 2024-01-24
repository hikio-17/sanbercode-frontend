import { } from 'react-icons';
import { IoBookOutline } from 'react-icons/io5';
import RegisterInput from '../components/RegisterInput';

function RegisterPage() {
   return (
      <section className="grid grid-cols-1 md:grid-cols-2 min-h-screen">
         <header className="grid place-content-center bg-teal-700 text-white">
            <h1 className="text-[200px]">
               <IoBookOutline />
            </h1>
            <h2 className='text-center text-3xl'>BookShelf</h2>
         </header>
      <article className="p-16 grid grid-cols-1 place-content-center">
        <h2 className="text-3xl font-light mb-4">Create your account</h2>

         <RegisterInput />
        <p className="text-sm">
          Already have an account?
          {' '}
          <a href="/" className="text-teal-700">Login</a>
        </p>
      </article>
    </section>
   )
}

export default RegisterPage;