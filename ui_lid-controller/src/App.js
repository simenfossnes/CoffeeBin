import React, { Component } from 'react';
import './App.css';
import CoffeeBinLid from './components/CoffeeBinLid';
import CoffeeCup from './components/CoffeeCup';
import io from 'socket.io-client';

const socket = io('https://coffeebin.appspot.com');


class App extends Component {

  state = {
    isDropping: false
  }

  render() {
    const { isDropping } = this.state;
    return (
      <div className="App">
        <h1 style={{position: 'absolute', top: 0, left: 0}} onClick={this.dropACup}>
          {isDropping ? 'Cup detected and dropping' : 'Waiting for Cup...'}
        </h1> 
        <div className={'cup-container'}>
          <CoffeeCup isDropped={isDropping} style={{width: '50vmin'}}/>
        </div>
        <CoffeeBinLid isOpen={isDropping} />
      </div>
    );
  }

  componentDidMount() {
    // listen for server event - trigger animation of the two components.
    socket.on('cupDropoffReceipt', this.dropACup);
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
