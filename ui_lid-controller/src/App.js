import React, { Component } from 'react';
import './App.css';
import CoffeeBinLid from './components/CoffeeBinLid';
import CoffeeCup from './components/CoffeeCup';

class App extends Component {

  state = {
    isDropping: false
  }

  render() {
    const { isDropping } = this.state;
    return (
      <div className="App">
        <CoffeeCup dropping={isDropping} style={{width: '50vmin'}}/>
        <CoffeeBinLid open={isDropping}/>
      </div>
    );
  }

  componentDidMount() {
    // listen for server event - trigger animation of the two components.
    
  }

}

export default App;
