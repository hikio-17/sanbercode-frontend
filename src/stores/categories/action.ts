/* eslint-disable @typescript-eslint/no-explicit-any */
import { Dispatch } from "@reduxjs/toolkit"
import api from "../../utils/api"
import SweetAlert from "../../components/SweetAlert"
import { CategoryItem } from "../../types"


const ActionType = {
   RECEIVE_ALL_CATEGORIES: 'RECEIVE_ALL_CATEGORIES',
   ADD_CATEGORY: 'ADD_CATEGORY',
   REMOVE_CATEGORY: 'REMOVE_CATEGORY',
   UPDATE_CATEGORY: 'UPDATE_CATEGORY',
   FIND_CATEGORY_WITH_BOOK: 'FIND_CATEGORY_WITH_BOOK',
}

function receiveAllCategoryActionCreator(categories: CategoryItem[]) {
   return {
      type: ActionType.RECEIVE_ALL_CATEGORIES,
      payload: {
         categories,
      }
   }
}

function addCategoryActionCreator(category: CategoryItem) {
   return {
      type: ActionType.ADD_CATEGORY,
      payload: {
         category,
      }
   }
}

function asyncAddCategory(name: string) {
   return async (dispatch: Dispatch) => {
      try {
         const { status, message, data: { category } } = await api.addCategory(name);

         if (status === 'success') {
            SweetAlert({
               status,
               text: message,
            });

            dispatch(addCategoryActionCreator(category))
         }
      } catch (error: any) {
         SweetAlert({
            status: 'error',
            text: error.message
         })
      }
   }
}

function asyncReceiveAllCategories() {
   return async (dispatch: Dispatch) => {
      try {
         const { data: { categories }} = await api.getAllCategories();

         dispatch(receiveAllCategoryActionCreator(categories));
      } catch (error: any) {
         SweetAlert({
            status: 'error',
            text: error.message,
         })
      }
   }
}

export {
   asyncReceiveAllCategories,
   asyncAddCategory,
   ActionType,
}

