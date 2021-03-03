import { combineReducers } from 'redux';
import { cellReducer } from './cellReducer';
import { optionReducer } from './optionReducer';

export const rootReducer = combineReducers({
	cell: cellReducer,
	option: optionReducer
});
