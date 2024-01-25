/* eslint-disable @typescript-eslint/no-explicit-any */
import { Dispatch } from "@reduxjs/toolkit";
import { BookItem } from "../../types";
import api from "../../utils/api"
import SweetAlert from "../../components/SweetAlert";

const ActionType = {
   ADD_BOOK: 'ADD_BOOK',
   RECEIVE_ALL_BOOK: 'RECEIVE_ALL_BOOK',
   REMOVE_BOOK: 'REMOVE_BOOK',
}

function receiveAllBookActionCreator(books: BookItem[]) {
   return {
      type: ActionType.RECEIVE_ALL_BOOK,
      payload: {
         books,
      }
   }
}

function addBookActionCreator(book: BookItem) {
   return {
      type: ActionType.ADD_BOOK,
      payload: {
         book,
      }
   }
}


function removeBookByIdActionCreator(bookId: number) {
   return {
      type: ActionType.REMOVE_BOOK,
      payload: {
         bookId
      }
   }
}

function asynCAddBook(book: BookItem) {
   return async (dispatch: Dispatch) =>  {
      try {
         const { status, message, data } = await api.addBook(book);

         if (status === 'success') {
            dispatch(addBookActionCreator(data.book));
            SweetAlert({
               status,
               text: message,
            });
         }
      } catch (error: any) {
         SweetAlert({
            status: 'error',
            text: error.message
         })
         
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

function asyncRemoveBookById(bookId: number) {
   return async (dispatch: Dispatch) => {
      try {
         dispatch(removeBookByIdActionCreator(bookId));
         const { status, message } = await api.removeBookById(bookId);

         SweetAlert({
            status,
            text: message
         });
      } catch (error: any) {
         SweetAlert({
            status: 'error',
            text: error.message,
         });
      }
   }
}

export {
   ActionType,
   asyncReceiveAllBook,
   receiveAllBookActionCreator,
   asyncRemoveBookById,
   asynCAddBook,
}