/* eslint-disable @typescript-eslint/no-explicit-any */
import { Dispatch } from "@reduxjs/toolkit";
import { BookItem } from "../../types";
import api from "../../utils/api"

const ActionType = {
   RECEIVE_ALL_BOOK: 'RECEIVE_ALL_BOOK'
}

function receiveAllBookActionCreator(books: BookItem[]) {
   return {
      type: ActionType.RECEIVE_ALL_BOOK,
      payload: {
         books,
      }
   }
}

function asyncReceiveAllBook() {
   return async (dispatch: Dispatch) => {
      try {
         const books = await api.getAllBooks();
         dispatch(receiveAllBookActionCreator(books));
      } catch (error: any) {
         alert(error.message)
      }
   }
}

export {
   ActionType,
   asyncReceiveAllBook,
   receiveAllBookActionCreator,
}