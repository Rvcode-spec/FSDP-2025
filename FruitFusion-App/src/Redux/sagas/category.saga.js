import { put, takeLatest } from "redux-saga/effects";
import { ADD_NEW_CATEGORY, GET_NEW_CATEGORY } from "../constants/categories.constant";
import { addCategoryToFirebase, getCategoryFromFirebase } from "../services/categories.service";
import { getCategorySuccess } from "../actions/category.action";


export function* addCategory({payload}){
  yield addCategoryToFirebase(payload)
}

export function* getCategory(){
  const categories=yield getCategoryFromFirebase()
  console.log("categories in get category cat.saga.js",categories)
  yield put(getCategorySuccess(categories))
}

export function* category(){
yield takeLatest(ADD_NEW_CATEGORY,addCategory)
yield takeLatest(GET_NEW_CATEGORY,getCategory)
}