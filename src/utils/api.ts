/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { LoginRequest, RegisterRequest } from "../types";

const api = (() => {
   const BASE_URL = 'http://localhost:8080';

   async function _fetchWithAuth(url: string, options: RequestInit = {}) {
      return fetch(url, {
         ...options,
         headers: {
            ...options.headers,
            Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
         },
      });
   }

   function putAccessToken(token: string) {
      localStorage.setItem('accessToken', token);
   }

   function getAccessToken() {
      return localStorage.getItem('accessToken')
   }

   async function register({ fullname, email, password }: RegisterRequest) {
      const response = await fetch(`${BASE_URL}/signup`, {
         method: 'POST',
         headers: {
            'Content-Type': 'application/json',
         },
         body: JSON.stringify({
            fullname, email, password,
         }),
      });

      const responseJson = await response.json();

      const { status, message } = responseJson;

      if (status !== 'success') {
         throw new Error(message);
      }

      return responseJson;
   }

   async function login({ email, password }: LoginRequest) {
      const response = await fetch(`${BASE_URL}/signin`, {
         method: 'POST',
         headers: {
            'Content-Type': 'application/json'
         },
         body: JSON.stringify({ email, password }),
      });

      const responseJson = await response.json();

      const { status, message } = responseJson;

      if (status !== 'success') {
         throw new Error(message);
      }

      const { data: { accessToken }} = responseJson;
      putAccessToken(accessToken);
      return {
         status,
         message,
      };
   }

   async function getAllBooks() {
      const response = await fetch(`${BASE_URL}/books`);

      const responseJson = await response.json();

      const { status, message } = responseJson;

      if (status !== 'success') {
         throw new Error(message);
      }

      const { data: { books } } = responseJson;

      return books;
   }

   async function removeBookById(bookId: number) {
      const response = await _fetchWithAuth(`${BASE_URL}/books/${bookId}`, {
         method: 'DELETE',
      });
      const responseJson = await response.json();

      const { status, message } = responseJson;

      if (status !== 'success') {
         throw new Error(message);
      }

      return { status, message };
   }

   async function addBook(book: any) {
      const response = await _fetchWithAuth(`${BASE_URL}/books`, {
         method: 'POST',
         headers: {
            'Content-Type': 'multipart/form-data'
         },
         body: book
      });

      const responseJson = await response.json();

      const { status, message } = responseJson;

      if (status !== 'success') {
         throw new Error(message);
      }

      return responseJson;
   }

   async function addCategory(name: string) {
      const response = await _fetchWithAuth(`${BASE_URL}/categories`, {
         method: 'POST',
         headers: {
            'Content-Type': 'application/json',
         },
         body: JSON.stringify({name}),
      });

      const responseJson = await response.json();

      const { status, message } = responseJson;

      if (status !== 'success') {
         throw new Error(message);
      }

      return responseJson;

   }

   async function getAllCategories () {
      const response = await fetch(`${BASE_URL}/categories`, {
         method: 'GET',
      });
      const responseJson = await response.json();
      const { status, message } = responseJson;

      if (status !== 'success') {
         throw new Error(message);
      }

      return responseJson;
   }

   async function updateCategoryById(name: string, categoryId: number) {
      const response = await _fetchWithAuth(`${BASE_URL}/categories/${categoryId}`, {
         method: 'PATCH',
         body: JSON.stringify({ name }),
      });

      const responseJson = await response.json();

      const { status, message } = responseJson;

      if (status !== 'success') {
         throw new Error(message);
      }

      return responseJson;
   }  


   async function removeCategoryById(id: number) {
      const response = await _fetchWithAuth(`${BASE_URL}/categories/${id}`, {
         method: 'DELETE',
      });

      const responseJson = await response.json();

      const { status, message } = responseJson;

      if (status !== 'success') {
         throw new Error(message);
      }

      return responseJson;
   }

   async function findCategoryById(categoryId: number) {
      const response = await fetch(`${BASE_URL}/categories/${categoryId}/books`, {
         method: 'GET',
      });

      const responseJson = await response.json();

      const { status, message } = responseJson;

      if (status !== 'success') {
         throw new Error(message);
      }

      return responseJson;
   }


   return {
      getAccessToken,
      putAccessToken,
      getAllBooks,
      removeBookById,
      register,
      login,
      addBook,
      getAllCategories,
      updateCategoryById,
      removeCategoryById,
      addCategory,
      findCategoryById,
   }
})();

export default api;