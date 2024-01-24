import { MouseEventHandler } from "react";

export interface CustomButtonProps {
   title: string;
   containerStyles?: string;
   handleClick?: MouseEventHandler<HTMLButtonElement>;
   btnType?: 'button' | 'submit';
   textStyles?: string;
   rigthIcon?: string;
   isDisabled?: boolean;
}

export interface RegisterRequest {
   email: string;
   fullname: string;
   password: string;
}