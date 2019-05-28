import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import firebase from '../src/firebaseConfig'

function App() {
  useEffect(() => {
    document.title = 'JVC-benri';
    const dbRef = firebase.database().ref();
    const wordsRef = dbRef.child("words");
    wordsRef.on('value', snapshot => {
      let words = snapshot.val();
      console.table(words);
    });
  });

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          the app is developing. Comeback soon..
        </p>
        <a
          className="App-link"
          href="https://www.facebook.com/m111z3r0"
          target="_blank"
          rel="noopener noreferrer"
        >
          Vuong Sy Thanh
        </a>
      </header>
    </div>
  );
}

export default App;
