import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/database'

const firebaseConfig = {
  apiKey: "AIzaSyBFyARLZjqYd1Trdkug49aMWnSTfT_9W6I",
  authDomain: "my-project-dc73e.firebaseapp.com",
  projectId: "my-project-dc73e",
  storageBucket: "my-project-dc73e.appspot.com",
  messagingSenderId: "646883959003",
  appId: "1:646883959003:web:95aa348d67499878d0ecfe",
  measurementId: "G-MPGN6S1M19"
};


const app = firebase.initializeApp(firebaseConfig);
export default app
