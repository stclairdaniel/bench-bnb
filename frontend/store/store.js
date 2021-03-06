import { createStore } from 'redux';
import RootReducer from '../reducers/root_reducer.js';
import RootMiddleware from '../middleware/root_middleware.js';

const configureStore = () => {
  return createStore(RootReducer, RootMiddleware);
};

export default configureStore;
