
import React, { Component } from 'react';
import './App.css';
import { Bones } from './components/Bones'
import { Footer } from './components/Footer';
import { NoBones } from './components/NoBones'


class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Is Today A Bones Day?</h1>
        <NoBones />
        <Footer />
      </div>
    );
  }
}

export default App;
