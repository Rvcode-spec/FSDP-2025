import { collection, addDoc, getDocs } from "firebase/firestore"; 
import { db } from "../../firebaseConfig";
export const addCategoryToFirebase=async(category)=>{
console.log(category, "IN SERVICE")
let categoryRef= collection(db,"category")
const docRef = await addDoc(categoryRef, {
    category
  });
  console.log("Document written with ID: ", docRef.id);
}

export const getCategoryFromFirebase=async()=>{

  let categoryRef= collection(db,"category")
  const res= await getDocs(categoryRef)
  const categories=[];
  res.forEach((doc)=>{
   
    categories.push(doc.data())
  })
  console.log("fetched categories",categories)
  return categories;
}