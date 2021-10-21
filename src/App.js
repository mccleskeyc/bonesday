
import React, {Component} from 'react';
import './App.css';
import {Bones} from './components/Bones'
import {NoBones} from './components/NoBones'

class App extends Component {
  render() {
  return (
    <div className="App">
      <h1>Is Today A Bones Day?</h1>
      
      <Bones />
      ---
      <NoBones />
    </div>
  );
}
}

export default App;
