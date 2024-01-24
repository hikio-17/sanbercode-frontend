import CustomButton from "./CustomButton";

function LoginInput () {
   return (
      <form className="register-input">
         <input
            type="email"
            placeholder="Email"
            className="block w-full p-2 mb-4 border border-gray-dark-color rounded-md"
         />
         <input
            type="password"
            placeholder="Password"
            className="block w-full p-2 mb-4 border border-gray-dark-color rounded-md"
         />

         <CustomButton
            title="Login"
            containerStyles="w-full p-2 mt-5 mb-5 bg-teal-700 text-white font-semibold rounded-md cursor-pointer"
         />
      </form>
   )
}

export default LoginInput;