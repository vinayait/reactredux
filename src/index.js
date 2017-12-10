import React from 'react';
import ReactDOM from 'react-dom';

import Constants from './constants';
//import appReducer from './store/reducers';
//import initialState from './initialState.json'
//import { createStore } from 'redux'
import storeFactory from './store'

const initialState = (localStorage['redux-store']) ? JSON.parse(localStorage['redux-store']) : {}

const saveState = () => {
  const state = JSON.stringify(store.getState())
  localStorage['redux-store'] = state
}

const store = storeFactory(initialState)

store.subscribe(saveState)

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

/*let state = initialState;

state = appReducer(state, {
  type: Constants.SET_GOAL,
  payload: 2
})

state = appReducer(state, {
  type: Constants.ADD_DAY,
  payload: {
    "resort": "Mt Shasta",
    "date": "2016-10-28",
    "powder": false,
    "backcountry": false
  }
})

state = appReducer(state, {
  type: Constants.CHANGE_SUGGESTIONS,
  payload: ["Mt Tallac", "Mt Hood", "Mt Shasta"]
})*/

//const store = createStore(appReducer);


//const store = createStore(appReducer, initialState);

//window.store = store

/*store.subscribe(() => console.log(store.getState()))

store.subscribe(() => {
  const state = JSON.stringify(store.getState())
  localStorage['redux-store'] = state
})*/


/*const unsubscribeGoalLogger = store.subscribe(() => console.log(`   Goal: ${store.getState().goal}`))
setInterval(() => {
  store.dispatch({
    type: Constants.SET_GOAL,
    payload: Math.floor(Math.random() * 100)
  })
}, 250)
setTimeout(() => {
  unsubscribeGoalLogger()
}, 3000)*/


//console.log('intial state : ', store.getState());

store.dispatch({
  type: Constants.ADD_DAY,
  payload: {
    "resort": "Mt Shasta",
    "date": "2016-10-25",
    "powder": false,
    "backcountry": false
  }
})

store.dispatch({
  type: Constants.SET_GOAL,
  payload: 2
})

//console.log('next state : ', store.getState());

ReactDOM.render(
  <div>
  <h1>Hello, React Redux</h1>
  <h2>{Object.keys(Constants).join('\n       ')}</h2>
  <h2>-----------------------------------------------------------------</h2>
  <h3><u>G O A L</u>: {store.getState().goal}</h3>
  <h3><u>R E S O R T S</u>: {JSON.stringify(store.getState().allSkiDays)}</h3>
  <h3><u>F E T C H I N G</u>: {store.getState().resortNames.fetching + ''}</h3>
  <h3><u>S U G G E S T I O N S</u>: {JSON.stringify(store.getState().resortNames.suggestions)}</h3>
  <br></br><br></br><br></br>

  </div>
  , document.getElementById('root'));
