import * as firebase from 'firebase';
const firebaseConfig = {
    apiKey: "AIzaSyBSvlcdQpqRorNKvrFuD1HOL8yZeJFs71g",
    authDomain: "mooretrivia-9df9b.firebaseapp.com",
    databaseURL: "https://mooretrivia-9df9b.firebaseio.com",
    projectId: "mooretrivia-9df9b",
    storageBucket: "mooretrivia-9df9b.appspot.com",
    messagingSenderId: "979949571659",
    appId: "1:979949571659:web:6041e6f1b0d45ab16907ce",
    measurementId: "G-03FG4XGT08"
}
firebase.initializeApp(firebaseConfig);
firebase.analytics();
export const firebaseDB = firebase.database();
// const databaseRef = firebase.database().ref();
// export const todosRef = databaseRef.child("todos")
