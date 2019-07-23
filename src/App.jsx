import { hot } from 'react-hot-loader/root';
import React from 'react';

import './App.css';

import icon from './assets/images/icon.png';

const App = () => (
  <div className="app">
    <img className="icon" src={icon} alt="icon" />
    <h1 className="title">React Simple Boilerplate</h1>
  </div>
);

export default hot(App);
