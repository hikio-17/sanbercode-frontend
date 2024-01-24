/* eslint-disable @typescript-eslint/no-unused-vars */
import { RegisterRequest } from "../types";

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

   return {
      getAccessToken,
      putAccessToken,
      register,
   }
})();

export default api;