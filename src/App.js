import React, {Component} from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/Header/Header';

import './App.css';

class App extends Component {
  render(){
    return (
      <Router>
        <div className="App">
          <div className="container">
            <Header />
            <img src={require("./images/rph_home.jpg")} className="full-image"/>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
