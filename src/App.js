import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as FROM from './Imports.js';
import Swipe from 'react-easy-swipe';
import { cellReducerAction } from './reducer/cellReducer';
import { setScoreAction, setStartAction, setArrowAction } from './reducer/optionReducer';
import './App.sass';

function App() {
	const dispatch = useDispatch();
	const cells = useSelector((state) => state.cell.cells);
	const score = useSelector((state) => state.option.score);
	const endgame = useSelector((state) => state.option.endgame);
	const arrow = useSelector((state) => state.option.arrow);
	const [ draw, setDraw ] = useState(false);
	const [ now, setNow ] = useState(false);
	const setEmptyCells = async () => {
		setNow(true);
		let random = await FROM.randommizer(FROM.Empty, false);
		dispatch(cellReducerAction(random));
		dispatch(setStartAction(false));
		setNow(false);
	};

	let random = async (boolen) => {
		let random = await FROM.randommizer(cells, boolen);
		if (random === false) {
			dispatch(setStartAction(true));
			dispatch(cellReducerAction(FROM.Empty));
		} else {
			dispatch(cellReducerAction(random));
			setDraw(true);
		}
	};

	useEffect(
		() => {
			const onKeyLeft = async ({ key }) => {
				if (key === 'ArrowLeft') {
					let res = await FROM.moveLeft(cells);
					dispatch(cellReducerAction(res['array']));
					dispatch(setScoreAction(res['score']));
					dispatch(setArrowAction('left'));
					random(false);
				}
			};
			const onKeyRight = async ({ key }) => {
				if (key === 'ArrowRight') {
					let res = await FROM.moveRight(cells);
					dispatch(cellReducerAction(res['array']));
					dispatch(setScoreAction(res['score']));
					dispatch(setArrowAction('right'));
					random(false);
				}
			};

			const onKeyDown = async ({ key }) => {
				if (key === 'ArrowDown') {
					let res = await FROM.moveDown(cells);
					dispatch(cellReducerAction(res['array']));
					dispatch(setScoreAction(res['score']));
					dispatch(setArrowAction('down'));
					random(false);
				}
			};

			const onKeyUp = async ({ key }) => {
				if (key === 'ArrowUp') {
					let res = await FROM.moveUp(cells);
					dispatch(cellReducerAction(res['array']));
					dispatch(setScoreAction(res['score']));
					dispatch(setArrowAction('up'));
					random(false);
				}
			};

			document.addEventListener('keydown', onKeyDown);
			document.addEventListener('keydown', onKeyUp);
			document.addEventListener('keydown', onKeyLeft);
			document.addEventListener('keydown', onKeyRight);

			random(true);

			return () => {
				document.removeEventListener('keydown', onKeyDown);
				document.removeEventListener('keydown', onKeyUp);
				document.removeEventListener('keydown', onKeyLeft);
				document.removeEventListener('keydown', onKeyRight);
			};
		},
		[ now ]
	);

	return (
		<div>
			<FROM.Help />
			<div className='App'>
				<FROM.Header score={score} />

				<Swipe
					onSwipeLeft={async () => {
						console.log('onSwipeLeft');
						let res = await FROM.moveLeft(cells);
						dispatch(cellReducerAction(res['array']));
						dispatch(setScoreAction(res['score']));
						dispatch(setArrowAction('left'));
						random(false);
					}}
					onSwipeRight={async () => {
						console.log('onSwipeRight');
						let res = await FROM.moveRight(cells);
						dispatch(cellReducerAction(res['array']));
						dispatch(setScoreAction(res['score']));
						dispatch(setArrowAction('right'));
						random(false);
					}}
					onSwipeDown={async () => {
						console.log('onSwipeDown');
						let res = await FROM.moveDown(cells);
						dispatch(cellReducerAction(res['array']));
						dispatch(setScoreAction(res['score']));
						dispatch(setArrowAction('down'));
						random(false);
					}}
					onSwipeUp={async () => {
						console.log('onSwipeUp');
						let res = await FROM.moveUp(cells);
						dispatch(cellReducerAction(res['array']));
						dispatch(setScoreAction(res['score']));
						dispatch(setArrowAction('up'));
						random(false);
					}}
					tolerance={100}
				>
					<FROM.Field cells={cells} onGo={setEmptyCells} reroll={endgame ? true : false} />
				</Swipe>

				<FROM.Arrow arrow={arrow} />
			</div>
			<FROM.Social />
		</div>
	);
}

export default App;
