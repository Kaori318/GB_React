import React from 'react';
import './App.css';
import MyHeader from './components/Message';


export function App(props) {
  return (
    <div className="App">
      <header className="App-header">
        <MyHeader name={"Ivan"}/>
      </header>
    </div>
  );
}