import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import About from './components/About';
import NavMenu from './components/NavMenu';

class App extends Component {
  render() {
    return (
      <Router>
          <div>
            <NavMenu />
              <Route exact path="/" component={Home} />
              <Route path="/about" component={About} />
        </div>
      </Router>
    );
  }
}

export default App;
