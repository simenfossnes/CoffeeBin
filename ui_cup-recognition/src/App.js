import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import QRScanner from './components/QRScanner';


class App extends Component {
  render() {
    return (
      <QRScanner/>
    );
  }
}

export default App;
