import * as firebase from 'firebase';
const config = {
    apiKey: "AIzaSyDJ13jFF3v2QTVydXZ5vCVy8AsdCdqQwCk",
    authDomain: "benri-2c1bb.firebaseapp.com",
    databaseURL: "https://benri-2c1bb.firebaseio.com",
    projectId: "benri-2c1bb",
    storageBucket: "benri-2c1bb.appspot.com",
    messagingSenderId: "337467238662",
    appId: "1:337467238662:web:2bd727115d6d4b4f"
};
let firebaseConfig = firebase.initializeApp(config);
export default firebaseConfig;