import { CustomButtonProps } from "../types";

function CustomButton ({ title, btnType, containerStyles, textStyles, handleClick, rigthIcon } : CustomButtonProps) {
   return (
      <button
         disabled={false}
         type={ btnType || 'button'}
         className={`custom-btn ${containerStyles}`}
         onClick={handleClick}
      >
         <span className={`flex-1 ${textStyles}`}>
            {title}
         </span>
         {rigthIcon && (
            <div className="relative w-6 h-6">
               <img src={rigthIcon} alt="rigth icon" className="object-contain" />
            </div>
         )}
      </button>
   )
}

export default CustomButton;