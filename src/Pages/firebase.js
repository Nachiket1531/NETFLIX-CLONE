// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword,signOut} from "firebase/auth";
import {addDoc,collection,getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


const firebaseConfig = {
  // Your web app's Firebase configuration
 
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth= getAuth(app);
const db = getFirestore(app);

const signup = async(name, email, password)=>{
  try{
    const res = await createUserWithEmailAndPassword(auth,email,password);
    const user = res.user;
    await addDoc(collection(db,"users"),{
      uid: user.uid,
      name,
      authProvider: "local",
      email,
    });
    }catch(error){
      console.log(error);
      alert(error);

  } 

}


const login = async()=>{
  try{
     await signInWithEmailAndPassword(auth,email,password)

  } catch(error){

    console.log(error);
    alert(error)

  }

}

const logout = () =>{
  signOut(auth);
  
}


export {auth, db, login, signup, logout};