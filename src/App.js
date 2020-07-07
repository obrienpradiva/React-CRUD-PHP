import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import  {BrowserRouter as Router, Link, Switch, Route} from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Body from './components/Body';

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Body />
      </Router>
    </div>
  );
}

export default App;
