import {combineReducers} from 'redux'
import preloadingReducer from './preloadingReducer'
import changeBgReducer from './changeBgReducer'

const combineReducer = combineReducers({
    preloadingReducer,
    changeBgReducer
})

export default combineReducer