import { combineReducers} from 'redux'
import taskReducer from './reducers'
import weatherReducer from './weatherReducer'
import quotesReducer from './quotesReducer'
import backgroundReducer from './backgroundReducer'

const rootReducer = combineReducers({
    weather: weatherReducer, todos: taskReducer, quotes: quotesReducer, background: backgroundReducer
})
  
    

export default rootReducer;