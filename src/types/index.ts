import { MouseEventHandler } from "react";

export interface BookItem {
   id: number;
   title: string;
   description: string;
   image_url: string;
   release_year: number;
   price: string;
   total_page: number;
   thickness: string;
   created_at: Date;
   updated_at: Date;
   category_id: number;
}

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
   isOpenDetail: boolean;
   closeModalDetail: () => void;
   book: BookItem;
   openEdit: () => void;
   remove: (bookId: number) => void;
}

export interface BookEditProps {
   isOpenEdit: boolean;
   closeModalEdit: () => void;
   book: BookItem;
   edit: (data: BookItem) => void;
}

export interface AddBookProps {
   isOpenAdd: boolean;
   closeModalAdd: () => void;
   addBook: (book: BookItem) => void
}