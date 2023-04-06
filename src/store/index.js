import { legacy_createStore as createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';
import categoriesReducer from './categories';
import productsReducer from './products';
import cartReducer from './cart';
import thunk from '../store/middleware/thunk';

const reducers = combineReducers({
  categories: categoriesReducer,
  products: productsReducer,
  cart: cartReducer,
});

const store = () => createStore(reducers, composeWithDevTools(applyMiddleware(thunk)));

export default store();