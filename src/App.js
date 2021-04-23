import logo from './logo.svg';
import './App.css';
import {useState} from 'react';
import fetch from 'node-fetch';
import React, { useEffect } from "react";

function App() {

  const[data,setData]=useState(null);
  const[Printer,setPrinter]=useState(<p>loading...</p>);

  const getData = () => fetch('https://opentdb.com/api.php?amount=10&category=15&type=multiple').then(response => response.json());

  useEffect(()=>{
    (async()=>{
      await getData().then(response => setData(response['results'])).then(printa());
    })();
  }, []);

  function printa() {
      console.log(data);
      if (data != null) {
        setPrinter(data.map( item => (
          <div>
            <div className="Rect">
              <p>{item.question}</p>
              <p>howdy</p>
            </div>
            <br></br>
          </div>
        )));
      }else{
        setPrinter(<p>failed</p>);
      }
  }

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
        {Printer}
      </div>  
    </div>
  );
}

export default App;