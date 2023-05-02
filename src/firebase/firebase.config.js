// Import the functions you need from the SDKs you need
import {initializeApp} from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAxQcUiX_IH37uVZIXbcLaSXCCcMjvn5rI",
  authDomain: "flavor-adventure-client-side.firebaseapp.com",
  projectId: "flavor-adventure-client-side",
  storageBucket: "flavor-adventure-client-side.appspot.com",
  messagingSenderId: "544686605001",
  appId: "1:544686605001:web:8bc8c38d58d0ae812ec318",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
