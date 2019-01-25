import Rebase from 're-base';
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBs9n-hKhsQFBoyp-nEPxhXXoX3h0DKbtw",
  authDomain: "catch-of-the-day-adam-ayd.firebaseapp.com",
  databaseURL: "https://catch-of-the-day-adam-ayd.firebaseio.com",
});

const base = Rebase.createClass(firebaseApp.database());

// this is a named export
export { firebaseApp };

// this is a default export
export default base;