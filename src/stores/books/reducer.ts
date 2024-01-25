/* eslint-disable @typescript-eslint/no-explicit-any */
import { ActionType } from "./action";

interface ReceiveAllBookAction {
   type: string;
   payload:  any;
}

function booksReducer(books = [], action: ReceiveAllBookAction ) {
   switch(action.type) {
      case ActionType.RECEIVE_ALL_BOOK:
         return action.payload.books;
      default:
         return books;
   }
}

export default booksReducer;