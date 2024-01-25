/* eslint-disable @typescript-eslint/no-explicit-any */
import { BookItem } from "../../types";
import { ActionType } from "./action";

interface ReceiveAllBookAction {
   type: string;
   payload: any;
}

function booksReducer(books = [], action: ReceiveAllBookAction) {
   switch (action.type) {
      case ActionType.RECEIVE_ALL_BOOK:
         return action.payload.books;
      case ActionType.REMOVE_BOOK:
         return books.filter((book: BookItem) => book.id !== action.payload.bookId)
      default:
         return books;
   }
}

export default booksReducer;