import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


const checklist = ["boots","tents","headlamp"];
console.log(checklist[1])

ReactDOM.render(

    <App authorized={true}/>,
  document.getElementById('root')
);
reportWebVitals();
