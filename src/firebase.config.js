import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyD1EG9317q8c6NTxL9X6p5K0tskTImD4Lo",
  authDomain: "restaurantapp-7b60f.firebaseapp.com",
  databaseURL: "https://restaurantapp-7b60f-default-rtdb.firebaseio.com",
  projectId: "restaurantapp-7b60f",
  storageBucket: "restaurantapp-7b60f.appspot.com",
  messagingSenderId: "305514243413",
  appId: "1:305514243413:web:e58a2a5cf5b347571f7bdc",
};

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, firestore, storage };