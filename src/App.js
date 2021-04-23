import logo from './logo.svg';
import './App.css';
import {useState} from 'react';
import fetch from 'node-fetch';
import React, { useEffect } from "react";

function App() {

  const[data,setData]=useState(null);

  const getData = () => fetch('https://opentdb.com/api.php?amount=10&category=15&type=multiple').then(response => response.json());

  useEffect(()=>{
    (async()=>{
      await getData().then(response => setData(response['results']));
    })();
  }, []);

  console.log(data);

  return (
    <div className="App">
      <header className="App-header">
        <h2>Video Game Trivia</h2>
        <div class="grid-container">
          <img src={logo} className="App-logo grid-item" alt="logo"/>
          <img src={logo} className="App-logo grid-item" alt="logo"/>
          <img src={logo} className="App-logo grid-item" alt="logo"/>
          <img src={logo} className="App-logo grid-item" alt="logo"/>
          <img src={logo} className="App-logo grid-item" alt="logo"/>
        </div>
      </header>
      <div class="App-body">
        <p>sup bro</p>
      </div>  
    </div>
  );
}

export default App;