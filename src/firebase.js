import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
export var firebaseConfig = {  
    /* 
    replace this object with yours 
    */  
   apiKey: "AIzaSyAnZD-xTIeCoc79We_1Ex582k7MuodFI_I",  
   authDomain: "react-app-de65b.firebaseapp.com",  
   databaseURL: "https://react-app-de65b-default-rtdb.firebaseio.com",  
   projectId: "react-app-de65b",
   storageBucket: "react-app-de65b.appspot.com",
   messagingSenderId: "637533438795",
   appId: "1:637533438795:web:f2d9745dd899f139c05ece",
   measurementId: "G-7K6629511T"
};  
  
// Initialize Firebase  
// var fireDb = firebase.initializeApp(firebaseConfig);  
// const fireDb = initializeApp(firebaseConfig);
 
// export default fireDb.database().ref();
const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
export { db }