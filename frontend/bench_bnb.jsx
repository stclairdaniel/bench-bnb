import React from 'react';
import ReactDom from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';

//Test
import { login } from './actions/session_actions.js';
window.login = login;

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById('root');
  const store = window.store = configureStore();
  ReactDom.render(<Root store={store}/>, root);
});
