import firebase from "firebase";


const firebaseConfig = {
    apiKey: "AIzaSyDl7nD81qkn2HV2XkA5cbLvNn9evSsN4pI",
    authDomain: "clone-a3cdc.firebaseapp.com",
    projectId: "clone-a3cdc",
    storageBucket: "clone-a3cdc.appspot.com",
    messagingSenderId: "278444787622",
    appId: "1:278444787622:web:2296fbaa5bb36b30ce3167"
};


const app = !firebase.apps.length ?
    firebase.initializeApp(firebaseConfig)
    : firebase.app();

const db = app.firestore();

export default db;