import React, { Component } from 'react';
import './App.css';
import './Components/style.css';
import UserInput from './Components/UserInput';
import UserOutput from './Components/UserOutput';


class App extends Component {
  state = {
    userName: "JustAnotherCoder"
  }

  clickHandler = () =>{
    this.setState({userName:"TxBlt"})
  }
  typeHandler = (event) => {
    this.setState({userName:event.target.value});
  }
  render() {
    return (
      <div className="App">
        <h1>Happy Hacking!</h1>
        <UserInput changed={this.typeHandler} value={this.state.userName}/>
        <UserOutput userName={this.state.userName} click={this.clickHandler}/>
      </div>
    );
  }
}

export default App;
