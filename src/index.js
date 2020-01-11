import isMobile from './isMobile';
import classnames from 'classnames';
import ReactDOM from 'react-dom';
import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import App from './App';
import AllMPCs from './AllMPCs';
import NewMPC from './NewMPC';
import MPCStatus from './MPCStatus';
import './index.css';
import 'typeface-rubik';
import {theme} from './colors';

// import './style.css';

ReactDOM.render(
  <Router>
    <Route exact path="/" component={AllMPCs}/>
    <Route path="/mpc/:mpcId?" component={MPCStatus}/>
  </Router>,
  document.getElementById('root')
);
