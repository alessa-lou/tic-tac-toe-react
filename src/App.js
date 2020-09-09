import React, { Component } from "react";
import "./App.css";
import { hot } from "react-hot-loader";
import NoteList from "./NoteList.js";

class App extends Component{
  render(){
    return(
      <div className="App">
        <h1> Hello, World! </h1>
        <h2> Bonjour</h2>
        <NoteList />
      </div>
    );
  }
}


export default hot(module)(App);
