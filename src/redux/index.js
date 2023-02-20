import { applyMiddleware, combineReducers, compose, legacy_createStore as createStore } from 'redux'
import thunk from 'redux-thunk'
import { songReducer } from './reducers/song.reducer'
import { playlistReducer } from './reducers/playlist.reducer'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const rootReducer = combineReducers({
  songModule: songReducer,
  playlistModule: playlistReducer,
})

export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))