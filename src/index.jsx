// external modules
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';

// internal modules
import App from './components/app';
import '../assets/stylesheets/application.scss';

//import Reducers
import identityReducer from './reducers/identity_reducer';

// Initial State
const initialState = {
  title: "Redux Chat",
  messages: [{"author":"Michel", "content":"Hello world!", "created_at":"2017-09-26T23:03:16.365Z"},
            {"author":"Jacques", "content":"My name is anonymous77", "created_at":"2017-09-26T23:03:21.194Z"}
            ],
  channels: [ 'general', 'react', 'paris' ],
  currentUser: prompt("What is your username?") || `anonymous${Math.floor(10 + (Math.random() * 90))}`,
  selectedChannel: 'general'
};

// State and reducers
const reducers = combineReducers({
  title: identityReducer,
  messages: identityReducer,
  channels: identityReducer,
  currentUser: identityReducer,
  selectedChannel: identityReducer
});

// Redux Store
const store = createStore(reducers, initialState);

// render an instance of the component in the DOM
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
