import { applyMiddleware, combineReducers, compose, legacy_createStore as createStore } from 'redux'
import thunk from 'redux-thunk'
import { songReducer } from './reducers/song.reducer'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const rootReducer = combineReducers({
  songModule: songReducer,
})

export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))