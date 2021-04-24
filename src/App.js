import logo from './logo.svg';
import './App.css';
import {useState} from 'react';
import fetch from 'node-fetch';
import React, { useEffect } from "react";

function App() {

  const[data,setData]=useState(null);
  const[Printer,setPrinter]=useState(<p>loading...</p>);
  const[exclaim,setExclaim]=useState("Are you up to the challenge?!?!");
  const[count,setCount]=useState(0);
  const[total,setTotal]=useState(0);
  const[rand,setRand]=useState(0);
  //const[check,setCheck]=useState("Question Status: Unanswered");

  const getData = () => fetch('https://opentdb.com/api.php?amount=1&category=15&type=multiple').then(response => response.json());

  useEffect(()=>{
    (async()=>{
      await getData().then(response => setData(response['results'])).then(printa());
    })();
    setRand(Math.floor(Math.random() * 4));
  }, [exclaim]);


  function printa() {
      console.log(data);
      if (data != null) {
        switch(rand){
          case 0:
            setPrinter(data.map( item => (
              <div>
                <h2>{item.question}</h2>
                <div className="Rect">
                  <button onClick={ () =>
                    {
                      setExclaim("Correct, the answer to \""+item.question+"\" is "+item.correct_answer);
                      setCount(count+1);
                      setTotal(total+1);
                    }
                  }className="button">{item.correct_answer}</button>
                  <button onClick={ () =>
                    {
                      setExclaim("Wrong, the answer to \""+item.question+"\" is "+item.correct_answer+"and not "+item.incorrect_answers[0])
                      setTotal(total+1);
                    }
                  }className="button">{item.incorrect_answers[0]}</button>
                  <button onClick={ () =>
                    {
                      setExclaim("Wrong, the answer to \""+item.question+"\" is "+item.correct_answer+"and not "+item.incorrect_answers[1])
                      setTotal(total+1);
                    }
                  }className="button">{item.incorrect_answers[1]}</button>
                  <button onClick={ () =>
                    {
                      setExclaim("Wrong, the answer to \""+item.question+"\" is "+item.correct_answer+"and not "+item.incorrect_answers[2])
                      setTotal(total+1);
                    }
                  }className="button">{item.incorrect_answers[2]}</button>
                </div>
                <br></br>
              </div>
            )));
            break;
          case 1:
            setPrinter(data.map( item => (
              <div>
                <h2>{item.question}</h2>
                <div className="Rect">
                  <button onClick={ () =>
                    {
                      setExclaim("Wrong, the answer to \""+item.question+"\" is "+item.correct_answer+"and not "+item.incorrect_answers[0])
                      setTotal(total+1);
                    }
                  }className="button">{item.incorrect_answers[0]}</button>
                  <button onClick={ () =>
                    {
                      setExclaim("Correct, the answer to \""+item.question+"\" is "+item.correct_answer);
                      setCount(count+1);
                      setTotal(total+1);
                    }
                  }className="button">{item.correct_answer}</button>
                  <button onClick={ () =>
                    {
                      setExclaim("Wrong, the answer to \""+item.question+"\" is "+item.correct_answer+"and not "+item.incorrect_answers[1])
                      setTotal(total+1);
                    }
                  }className="button">{item.incorrect_answers[1]}</button>
                  <button onClick={ () =>
                    {
                      setExclaim("Wrong, the answer to \""+item.question+"\" is "+item.correct_answer+"and not "+item.incorrect_answers[2])
                      setTotal(total+1);
                    }
                  }className="button">{item.incorrect_answers[2]}</button>
                </div>
                <br></br>
              </div>
            )));
            break;
          case 2:
            setPrinter(data.map( item => (
              <div>
                <h2>{item.question}</h2>
                <div className="Rect">
                  <button onClick={ () =>
                    {
                      setExclaim("Wrong, the answer to \""+item.question+"\" is "+item.correct_answer+"and not "+item.incorrect_answers[0])
                      setTotal(total+1);
                    }
                  }className="button">{item.incorrect_answers[0]}</button>
                  <button onClick={ () =>
                    {
                      setExclaim("Wrong, the answer to \""+item.question+"\" is "+item.correct_answer+"and not "+item.incorrect_answers[1])
                      setTotal(total+1);
                    }
                  }className="button">{item.incorrect_answers[1]}</button>
                  <button onClick={ () =>
                    {
                      setExclaim("Correct, the answer to \""+item.question+"\" is "+item.correct_answer);
                      setCount(count+1);
                      setTotal(total+1);
                    }
                  }className="button">{item.correct_answer}</button>
                  <button onClick={ () =>
                    {
                      setExclaim("Wrong, the answer to \""+item.question+"\" is "+item.correct_answer+"and not "+item.incorrect_answers[2])
                      setTotal(total+1);
                    }
                  }className="button">{item.incorrect_answers[2]}</button>
                </div>
                <br></br>
              </div>
            )));
            break;
          case 3:
            setPrinter(data.map( item => (
              <div>
                <h2>{item.question}</h2>
                <div className="Rect">
                  <button onClick={ () =>
                    {
                      setExclaim("Wrong, the answer to \""+item.question+"\" is "+item.correct_answer+"and not "+item.incorrect_answers[0])
                      setTotal(total+1);
                    }
                  }className="button">{item.incorrect_answers[0]}</button>
                  <button onClick={ () =>
                    {
                      setExclaim("Wrong, the answer to \""+item.question+"\" is "+item.correct_answer+"and not "+item.incorrect_answers[1])
                      setTotal(total+1);
                    }
                  }className="button">{item.incorrect_answers[1]}</button>
                  <button onClick={ () =>
                    {
                      setExclaim("Wrong, the answer to \""+item.question+"\" is "+item.correct_answer+"and not "+item.incorrect_answers[2])
                      setTotal(total+1);
                    }
                  }className="button">{item.incorrect_answers[2]}</button>
                  <button onClick={ () =>
                    {
                      setExclaim("Correct, the answer to \""+item.question+"\" is "+item.correct_answer);
                      setCount(count+1);
                      setTotal(total+1);
                    }
                  }className="button">{item.correct_answer}</button>
                </div>
                <br></br>
              </div>
            )));
            break;
        }
      }else{
        setPrinter(<p>Program Failed -</p>);
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
        <h1>{exclaim}</h1>
        <p>{count} correct of {total} questions attempted</p>
        {Printer}
      </div>  
    </div>
  );
}

export default App;