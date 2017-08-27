import firebase from 'firebase';

const config = {
  apiKey: "AIzaSyAQAnT2jNNhj05foAjmtzCUkinu67_vP1o",
  authDomain: "lunch-rush-4ae20.firebaseapp.com",
  databaseURL: "https://lunch-rush-4ae20.firebaseio.com",
  projectId: "lunch-rush-4ae20",
  storageBucket: "",
  messagingSenderId: "113891782995"
};


firebase.initializeApp(config);

export default firebase;

export const database = firebase.database();
export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
