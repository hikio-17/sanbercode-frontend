import useInput from "../hooks/useInput";
import { LoginRequest } from "../types";
import CustomButton from "./CustomButton";

interface LoginInputProps {
   login: (data: LoginRequest) => void;
}

function LoginInput({ login }: LoginInputProps) {
   const [email, onEmailChange] = useInput('');
   const [password, onPasswordChange] = useInput('');

   return (
      <form className="register-input">
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

         <CustomButton
            handleClick={() => login({ email, password })}
            title="Login"
            containerStyles="w-full p-2 mt-5 mb-5 bg-teal-700 text-white font-semibold rounded-md cursor-pointer"
         />
      </form>
   )
}

export default LoginInput;