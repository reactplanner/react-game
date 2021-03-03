import { SET_SCORE, SET_START, SET_ARROW } from './types';

const initialState = {
	score: 0,
	arrow: '',
	endgame: false
};

export const optionReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_SCORE:
			if (action.payload !== 0) {
				return { ...state, score: state.score + action.payload };
			} else {
				return { ...state };
			}

		case SET_START:
			return { ...state, endgame: action.payload };
		case SET_ARROW:
			return { ...state, arrow: action.payload };
		default:
			break;
	}
	return state;
};

export const setScoreAction = (payload) => ({ type: SET_SCORE, payload: payload });
export const setStartAction = (payload) => ({ type: SET_START, payload: payload });
export const setArrowAction = (payload) => ({ type: SET_ARROW, payload: payload });
