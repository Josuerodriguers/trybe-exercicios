import { legacy_createStore as createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from '@redux-devtools/extension';
import  characterReducer  from './reducers/characterReducer';



export const store = createStore(characterReducer,composeWithDevTools(applyMiddleware(thunk)));