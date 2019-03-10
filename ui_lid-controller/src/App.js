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
        <button onClick={this.dropACup}>drop a coffee</button>
        <div className={'cup-container'}>
          <CoffeeCup dropping={isDropping} style={{width: '50vmin'}}/>
        </div>
        <CoffeeBinLid isOpen={isDropping} />
      </div>
    );
  }

  componentDidMount() {
    // listen for server event - trigger animation of the two components.

  }

  dropACup = () =>{
    this.toggleIsDropping();
    setTimeout(this.toggleIsDropping, 500);
  }

  toggleIsDropping = () => {
    this.setState(prevState => ({isDropping: !prevState.isDropping}))
  }

}

export default App;
