// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth";
import { getFirestore, collection, getDocs, doc, runTransaction  } from 'firebase/firestore';
import { getStorage } from "firebase/storage";






// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDiOmO_hVyBmJv3EtrXLOHBmkfCcBKTOYM",
  authDomain: "script-b1ea9.firebaseapp.com",
  projectId: "script-b1ea9",
  storageBucket: "script-b1ea9.appspot.com",
  messagingSenderId: "65170484819",
  appId: "1:65170484819:web:14a50caca58d2659b3e0a6",
  measurementId: "G-N1Q3TWHGZF"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);

const analytics = getAnalytics(app);
export const auth = getAuth(app);

//db

export async function getInfo() {

  const usersCol = collection(db, 'users');
  const usersSnapshot = await getDocs(usersCol);
  const usersList = usersSnapshot.docs.map(doc => doc.data());
  return usersList;

}


//High score

const sfDocRef = doc(db, "users", "F0Fbnsi73IMg08ojiWSh");

export async function updateScore(newScore) {

  return await runTransaction(db, async (transaction) => {

    const sfDoc = await transaction.get(sfDocRef);
    console.log(sfDoc.data())
   
    
    const score = sfDoc.data().score;
    console.log(score)

    if (  newScore > score ) {
      transaction.update(sfDocRef, { score: newScore });

    } 



  }).then(() => {
    console.log("Transaction success!");
  }).catch(err => {
    console.log("Transaction failed: ", err);
  });



}

 