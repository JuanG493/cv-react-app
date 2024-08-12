import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import Person from './components/global';
import './index.css';
import './styles/custom.scss';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Person></Person>
  </React.StrictMode>,
)
