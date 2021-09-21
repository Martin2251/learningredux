import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { bindActionCreators, createStore } from 'redux';

//store - globalised  state


//action - describes what you want to do increment
//function that returns an object

const increment = () =>{
  return {
    type: 'INCREMENT'
  }
}

const decrement = () =>{
  return {
    type: 'DECREMENT'
  }
}

//reducer  - actions transforms state into new the state
// JUST ANORTHER FUNCTION

const counter = (state=0;) => {
switch (action.type){
  case "INCREMENT":
    return state +1;
    case "DECREMENT":
      return state -1;
}

}
let store = createStore(counter);

// display it in the console
store.subscribe(() => console.log(store.getState()));
//dispatch execute the action to the reducer

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
