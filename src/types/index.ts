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

export interface OptionProps {
   title: string;
   value: number | null;
}

export interface CustomFilterProps {
   title: string;
   options: OptionProps[];
}

export interface RegisterRequest {
   email: string;
   fullname: string;
   password: string;
}

export interface LoginRequest {
   email: string;
   password: string;
}

export interface BookDetailProps {
   isOpen: boolean;
   closeModal: () => void;
}
