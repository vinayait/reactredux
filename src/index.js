import React from 'react';
import ReactDOM from 'react-dom';

import Constants from './constants';
import appReducer from './store/reducers';
import initialState from './initialState.json'

//const state=10;
//const state=null;

/*const state= [
  "user not authorized",
  "server feed not found"
]*/

/*const state= [
  {
    "resort": "Kirkwood",
    "date": "2016-13-15",
    "powder": true,
    "backcountry": false
  },
  {
    "resort": "Boreal",
    "date": "2016-12-13",
    "powder": true,
    "backcountry": true
  }
]*/

/*const state = {
  "fetching": false,
  "suggestions": []
}*/

let state = initialState;

//==============================================================================

/*const action = {
  type: Constants.SET_GOAL,
  payload: 15
};*/

/*const action = {
  type: Constants.ADD_DAY,
  payload: {
    {
      "resort": "Heavenly",
      "date": "2016-12-7",
      "powder": true,
      "backcountry": false
    }
  }
};*/

/*const action = {
  type: Constants.ADD_ERROR,
  payload: "cannot connect to the server"
}*/

/*const action = {
  type: Constants.CLEAR_ERROR,
  payload: 0
}*/

/*const action = {
  type: Constants.ADD_DAY,
  payload: {
    "resort": "Boreal",
    "date": "2016-12-13",
    "powder": true,
    "backcountry": true
  }
}*/

/*const action = {
  type: Constants.REMOVE_DAY,
  payload: "2016-13-15"
}*/

/*const action = {
  type: Constants.FETCH_RESORT_NAMES,
}*/

/*const action = {
  type: Constants.CANCEL_FETCHING,
}*/

/*const action = {
  type: Constants.CLEAR_SUGGESTIONS
}*/

/*const action = {
  type: Constants.CHANGE_SUGGESTIONS,
  payload: ["Heavenly Ski Resort","Heavens Sonohora","Mountain Hills","Sky Peaks"]
}*/

//==============================================================================

//const nextState = goal(state, action);
//const nextState = skiDay(state, action);
//const nextState = errors(state, action);
//const nextState = allSkiDays(state, action);
//const nextState = fetching(state, action);
//const mextState = suggestions(state, action);

ReactDOM.render(
  <div>
  <h1>Hello, React Redux</h1>
  <h2>{Object.keys(Constants).join('\n       ')}</h2>
  <h3>{state.goal}</h3>
  <h3>{JSON.stringify(state.allSkiDays)}</h3>
  <h3>{state.resortNames.suggestions}</h3>
  </div>
  , document.getElementById('root'));
