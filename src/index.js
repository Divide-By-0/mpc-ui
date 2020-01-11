import isMobile from './isMobile';
import classnames from 'classnames';
import ReactDOM from 'react-dom';
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import App from './App';
import AllMPCs from './AllMPCs';
import NewMPC from './NewMPC'; 
import MPCStatus from './MPCStatus'; 
import './index.css';
import 'typeface-rubik';
import {theme} from './colors';

// import './style.css';

/*
ReactDOM.render(
<h4 style={{marginLeft: 10}}>down for a maintenance</h4>,
document.getElementById('root')
);
*/
ReactDOM.render(
<Router>
    <div 
        style={{backgroundColor: 'black'}} className= {classnames('router-wrapper', {mobile: isMobile()})}>
        {/* <Route exact path="/" component={NewGame} /> */}
        <Route exact path="/" component= {AllMPCs} /> 
        <Route path="/new" component={NewMPC} />
        <Route path="/mpc/:mpcId?" component={MPCStatus} />
    </div>
</Router>,
document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
