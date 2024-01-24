import useInput from "../hooks/useInput";
import CustomButton from "./CustomButton";

interface RegisterInputProps {
   register: (data: { fullname: string, email: string, password: string }) => void;
}

function RegisterInput({ register }: RegisterInputProps) {
   const [fullname, onFullnameChange] = useInput('');
   const [email, onEmailChange] = useInput('');
   const [password, onPasswordChange] = useInput('');

   return (
      <form className="register-input">
         <input
            value={fullname}
            onChange={onFullnameChange}
            type="text"
            placeholder="Fullname"
            className="block w-full p-2 mb-4 border border-gray-dark-color rounded-md"
         />
         <input
         value={email}
         onChange={onEmailChange}
            type="email"
            placeholder="Email"
            className="block w-full p-2 mb-4 border border-gray-dark-color rounded-md"
         />
         <input
            value={password}
            onChange={onPasswordChange}
            type="password"
            placeholder="Password"
            className="block w-full p-2 mb-4 border border-gray-dark-color rounded-md"
         />
         <input
            type="password"
            placeholder="Confirm your password"
            className="block w-full p-2 mb-4 border border-gray-dark-color rounded-md"
         />

         <CustomButton 
            title="Register"
            handleClick={() => register({ email, fullname, password })}
            containerStyles="w-full p-2 mt-5 mb-5 bg-teal-700 text-white font-semibold rounded-md cursor-pointer"
         />
      </form>
   )
}

export default RegisterInput;