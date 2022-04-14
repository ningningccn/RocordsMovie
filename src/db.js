import { initializeApp } from 'firebase/app';
import { getDatabase } from "firebase/database";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";

// // import firebase from 'firebase/app'
// import 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyAPW-vE8Nj1H0dFUkpzaV72wJGAtfH9B00",
  authDomain: "movie-record-17664.firebaseapp.com",
  databaseURL: "https://movie-record-17664-default-rtdb.firebaseio.com",
  projectId: "movie-record-17664",
  storageBucket: "movie-record-17664.appspot.com",
  messagingSenderId: "390563252784",
  appId: "1:390563252784:web:93ab8b0a89bad344a67bf5"
};
// 初始化
const app = initializeApp(firebaseConfig)
//  init services
export const db = getDatabase(app);
export const auth = getAuth(app);
export const storage = getStorage(app);
// export {db}