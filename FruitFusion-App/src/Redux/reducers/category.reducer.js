import { ADD_NEW_CATEGORY , ADD_NEW_CATEGORY_SUCCESS, ADD_NEW_CATEGORY_ERROR, GET_NEW_CATEGORY, GET_NEW_CATEGORY_SUCCESS, GET_NEW_CATEGORY_ERROR} from "../constants/categories.constant";

const initialState={
    categories:["sjsjjs"]
}
export const categoryReducer=(state=initialState,action)=>{
   switch(action.type){
    case ADD_NEW_CATEGORY:
        return {
          ...state,
          categories: [...state.categories, action.payload],
        };
        
      case ADD_NEW_CATEGORY_SUCCESS:
        return {
          ...state,
          categories: [...state.categories, action.payload], 
        };
        
      case ADD_NEW_CATEGORY_ERROR:
        return {
          ...state,
  
        };



        case GET_NEW_CATEGORY:
          return {
            ...state,
            // categories: [...state.categories, action.payload],
          };
          
        case GET_NEW_CATEGORY_SUCCESS:
          return {
            ...state,
            categories: [...state.categories, action.payload], 
          };
          
        case GET_NEW_CATEGORY_ERROR:
          return {
            ...state,
    
          };
    default: return state;
   }
}