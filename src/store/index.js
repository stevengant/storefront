import { legacy_createStore as createStore, combineReducers } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';
import categoriesReducer from './categories';

const reducers = combineReducers({
  categories: categoriesReducer,
});

const store = () => createStore(reducers, composeWithDevTools());



export default store();