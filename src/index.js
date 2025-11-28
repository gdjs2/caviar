// src/index.js

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// 1. 引入 HashRouter
import { HashRouter } from 'react-router-dom'; 

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // 2. 用 HashRouter 包裹 App
  <HashRouter>
    <App />
  </HashRouter>
);