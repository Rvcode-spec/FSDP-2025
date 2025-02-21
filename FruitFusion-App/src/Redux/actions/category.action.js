import { ADD_NEW_CATEGORY, ADD_NEW_CATEGORY_ERROR, ADD_NEW_CATEGORY_SUCCESS, GET_NEW_CATEGORY, GET_NEW_CATEGORY_ERROR, GET_NEW_CATEGORY_SUCCESS } from "../constants/categories.constant";

export const addCategoryStart = (category) => {
  return {
    type: ADD_NEW_CATEGORY,
    payload: category,
  };
};

export const addCategoryError = (category) => {
    return {
      type: ADD_NEW_CATEGORY_ERROR,
      payload: category,
    };
  };

  export const addCategorySuccess = (category) => {
    return {
      type: ADD_NEW_CATEGORY_SUCCESS,
      payload: category,
    };
  };




  export const getCategoryStart = (category) => {
    return {
      type: GET_NEW_CATEGORY
 
    };
  };
  
  export const getCategoryError = (category) => {
      return {
        type: GET_NEW_CATEGORY_ERROR,
        payload: category,
      };
    };
  
    export const getCategorySuccess = (category) => {
      return {
        type: GET_NEW_CATEGORY_SUCCESS,
        payload:[...this.state,category],
      };
    };
  





  