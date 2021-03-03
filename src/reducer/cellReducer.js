/*
{ id: 0, x: 0, y: 0, value: '0' },
{ id: 1, x: 0, y: 1, value: '0' },
{ id: 2, x: 0, y: 2, value: '0' },
{ id: 3, x: 0, y: 3, value: '0' },
{ id: 4, x: 1, y: 0, value: '0' },
{ id: 5, x: 1, y: 1, value: '0' },
{ id: 6, x: 1, y: 2, value: '0' },
{ id: 7, x: 1, y: 3, value: '0' },
{ id: 8, x: 2, y: 0, value: '0' },
{ id: 9, x: 2, y: 1, value: '0' },
{ id: 10, x: 2, y: 2, value: '0' },
{ id: 11, x: 2, y: 3, value: '0' },
{ id: 12, x: 3, y: 0, value: '0' },
{ id: 13, x: 3, y: 1, value: '0' },
{ id: 14, x: 3, y: 2, value: '0' },
{ id: 15, x: 3, y: 3, value: '0' }
*/
import { SET_CELLS, TURN_RIGHT, TURN_LEFT, TURN_UP, TURN_DOWN } from './types';

const initialState = {
	cells: [
		{ id: 1, x: 0, y: 0, value: '0' },
		{ id: 2, x: 0, y: 1, value: '0' },
		{ id: 3, x: 0, y: 2, value: '0' },
		{ id: 4, x: 0, y: 3, value: '0' },
		{ id: 5, x: 1, y: 0, value: '0' },
		{ id: 6, x: 1, y: 1, value: '0' },
		{ id: 7, x: 1, y: 2, value: '0' },
		{ id: 8, x: 1, y: 3, value: '0' },
		{ id: 9, x: 2, y: 0, value: '0' },
		{ id: 10, x: 2, y: 1, value: '0' },
		{ id: 11, x: 2, y: 2, value: '0' },
		{ id: 12, x: 2, y: 3, value: '0' },
		{ id: 13, x: 3, y: 0, value: '0' },
		{ id: 14, x: 3, y: 1, value: '0' },
		{ id: 15, x: 3, y: 2, value: '0' },
		{ id: 16, x: 3, y: 3, value: '0' }
	]
};

export const cellReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_CELLS:
			return { ...state, cells: action.payload };

		default:
			break;
	}
	return state;
};

export const cellReducerAction = (payload) => ({ type: SET_CELLS, payload: payload });
