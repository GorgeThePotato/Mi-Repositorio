
import Firebase from "firebase";


const firebaseConfig = {
  apiKey: "AIzaSyDiJ2jf67hLCg2uSksbdqgHt7XSZ6ZYCcE",
  authDomain: "web-pulpo.firebaseapp.com",
  projectId: "web-pulpo",
  storageBucket: "web-pulpo.appspot.com",
  messagingSenderId: "967899386521",
  appId: "1:967899386521:web:4e42ca1d77a18e30549e08",
  measurementId: "${config.measurementId}"
};


const firebaseApp = Firebase.initializeApp(firebaseConfig)


export const Auth = firebaseApp.auth()
export const Storage = firebaseApp.storage()
export const Database = firebaseApp.firestore()
export const GroupsRef = Database.collection('groups')
export const UsersRef = Database.collection('users')
