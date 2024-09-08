import { initializeApp } from "firebase/app";
import { getFirestore} from "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyDjt3tM7o1xzpKmjcOnSpK6LE4kO-v4dGo",
    authDomain: "entre-mundos-69a42.firebaseapp.com",
    projectId: "entre-mundos-69a42",
    storageBucket: "entre-mundos-69a42.appspot.com",
    messagingSenderId: "303448383992",
    appId: "1:303448383992:web:3581eed337a70cf9ddf60d",
    measurementId: "G-HJ06V2KTTG"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);