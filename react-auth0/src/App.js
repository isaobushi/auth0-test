import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Main from './components/Main'
import Secret from './components/Secret'
import Notfound from './components/Notfound'
import Callback from './components/Callback'




class App extends Component {
  render() {

    let mainComponent = ""
    switch(this.props.location) {
      case "":
        mainComponent = <Main {...this.props}/>
        break
      case "secret":
        mainComponent = <Secret />
        break
      case "callback":
        mainComponent = <Callback />
        break 
      default:
        mainComponent = <Notfound />
    }

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
          <h1 className='App-title'>{this.props.name}</h1>
          {mainComponent}
      </div>
    );
  }
}

export default App;
