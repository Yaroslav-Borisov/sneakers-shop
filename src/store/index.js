import { combineReducers, legacy_createStore as createStore } from '@reduxjs/toolkit';
import { cardReducer } from './cardReducer';

const rootReducer = combineReducers({
	cards: cardReducer
});

export const store = createStore(rootReducer);