import Field from './UI/Field/Field';
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import moveLeft from './logic/moveLeft';
import { moveRight } from './logic/moveRight';
import moveDown from './logic/moveDown';
import moveUp from './logic/moveUp';
import randommizer from './logic/randommizer';
import Header from './components/Header/Header';
import Help from './components/Help/Help';
import Social from './components/Social/Social';
import Arrow from './UI/Arrow/Arrow';
import { Empty } from './logic/empty';
import { cellReducerAction, changedStartReducer } from './reducer/cellReducer';
import { setScoreAction, setStartAction, setArrowAction } from './reducer/optionReducer';
import './App.sass';

function App() {
	const dispatch = useDispatch();
	const cells = useSelector((state) => state.cell.cells);
	console.log('🚀 ~ file: App.js ~ line 21 ~ App ~ cells', cells);
	const score = useSelector((state) => state.option.score);
	const endgame = useSelector((state) => state.option.endgame);
	const arrow = useSelector((state) => state.option.arrow);
	const [ draw, setDraw ] = useState(false);
	const [ now, setNow ] = useState(false);
	const setEmptyCells = async () => {
		setNow(true);
		let random = await randommizer(Empty, false);
		console.log('setEmptyCells ~ random', random);
		dispatch(cellReducerAction(random));
		dispatch(setStartAction(false));
		setNow(false);
	};
	useEffect(
		() => {
			console.log(cells, 'useEffgect cellls');
			const onKeyLeft = async ({ key }) => {
				if (key === 'ArrowLeft') {
					let res = await moveLeft(cells);
					dispatch(cellReducerAction(res['array']));
					dispatch(setScoreAction(res['score']));
					dispatch(setArrowAction('left'));
					random(false);
				}
			};
			const onKeyRight = async ({ key }) => {
				if (key === 'ArrowRight') {
					let res = await moveRight(cells);
					dispatch(cellReducerAction(res['array']));
					dispatch(setScoreAction(res['score']));
					dispatch(setArrowAction('right'));
					random(false);
				}
			};

			const onKeyDown = async ({ key }) => {
				if (key === 'ArrowDown') {
					let res = await moveDown(cells);
					dispatch(cellReducerAction(res['array']));
					dispatch(setScoreAction(res['score']));
					dispatch(setArrowAction('down'));
					random(false);
				}
			};

			const onKeyUp = async ({ key }) => {
				if (key === 'ArrowUp') {
					let res = await moveUp(cells);
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

			let random = async (boolen) => {
				let random = await randommizer(cells, boolen);
				if (random === false) {
					dispatch(setStartAction(true));
					dispatch(cellReducerAction(Empty));
				} else {
					dispatch(cellReducerAction(random));
					setDraw(true);
				}
			};
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
			<Help />
			<div className='App'>
				<Header score={score} />
				<Field cells={cells} onGo={setEmptyCells} reroll={endgame ? true : false} />
				<Arrow arrow={arrow} />
			</div>
			<Social />
		</div>
	);
}

export default App;
