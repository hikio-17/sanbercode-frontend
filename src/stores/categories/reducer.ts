/* eslint-disable @typescript-eslint/no-explicit-any */
import { CategoryItem } from "../../types";
import { ActionType } from "../categories/action";

interface CategoryAction {
   type: string;
   payload: any;
}

function categoriesReducer(categories = [], action: CategoryAction) {
   switch (action.type) {
      case ActionType.RECEIVE_ALL_CATEGORIES:
         return action.payload.categories;
      case ActionType.ADD_CATEGORY:
         return [...categories, action.payload.category];
      case ActionType.REMOVE_CATEGORY:
         return categories.filter((category: CategoryItem) => category.id !== action.payload.categoryId)
      default:
         return categories;
   }
}

export default categoriesReducer;