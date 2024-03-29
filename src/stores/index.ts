import { configureStore } from '@reduxjs/toolkit';
import booksReducer from './books/reducer';
import categoriesReducer from './categories/reducer';

const store = configureStore({
  reducer: {
    books: booksReducer,
    categories: categoriesReducer
  },
});

export default store;
