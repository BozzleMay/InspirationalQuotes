import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from '../combineReducers'
import weatherReducer from '../weatherReducer'

import thunk from 'redux-thunk'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
console.log(rootReducer)
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))
console.log(store.getState())

let URL = 'api.openweathermap.org/data/2.5/weather?q={city name}&appid=833d6bab104b69d5f1d4e30dcf52e1cd'




export default store