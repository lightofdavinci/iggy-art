import React from 'react';
import { render } from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';
import App from './App';
import Post from './Post.jsx';
import NoMatch from './NoMatch.jsx';
import './css/index.css';

render((
    <Router onUpdate={() => window.scrollTo(0, 0)} history={browserHistory}>
      <Route path="/" component={App}/>
      <Route path="/post/:postId" component={Post}/>
      <Route path="*" component={NoMatch}/>
    </Router>
  ),document.getElementById('root'));
