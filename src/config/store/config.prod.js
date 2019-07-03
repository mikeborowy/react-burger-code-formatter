import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import reduxPromise from 'redux-promise';
import { async } from '../../store/middlewares/async';
import { rootReducers } from './index';
import { stateValidator } from '../../store/middlewares/stateValidator';

export const config = () => {
  return createStore(rootReducers, applyMiddleware(reduxThunk, reduxPromise, async));
};
