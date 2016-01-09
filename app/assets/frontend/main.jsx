import React from 'react'
import ReactDOM from 'react-dom'
import Index from './components/Index';

import { Router, Route, Link } from 'react-router'

let documentReady = () => {
  let reactNode = document.getElementById('react');
  if (reactNode) {
    ReactDOM.render(<Index />, reactNode)
  }
}

$(documentReady);
