import Field from './UI/Field/Field';
import React, { useState, useEffect } from 'react';
import moveLeft from './logic/moveLeft';
import { moveRight } from './logic/moveRight';
import moveDown from './logic/moveDown';
import moveUp from './logic/moveUp';
import randommizer from './logic/randommizer';
import Header from './components/Header';

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

function App() {
	const [ score, setScore ] = useState(0);
	const [ draw, setDraw ] = useState(false);
	const [ cells, setCells ] = useState([
		{ id: 1, x: 0, y: 0, value: '16' },
		{ id: 2, x: 0, y: 1, value: '0' },
		{ id: 3, x: 0, y: 2, value: '0' },
		{ id: 4, x: 0, y: 3, value: '0' },
		{ id: 5, x: 1, y: 0, value: '4' },
		{ id: 6, x: 1, y: 1, value: '0' },
		{ id: 7, x: 1, y: 2, value: '0' },
		{ id: 8, x: 1, y: 3, value: '0' },
		{ id: 9, x: 2, y: 0, value: '4' },
		{ id: 10, x: 2, y: 1, value: '0' },
		{ id: 11, x: 2, y: 2, value: '0' },
		{ id: 12, x: 2, y: 3, value: '0' },
		{ id: 13, x: 3, y: 0, value: '0' },
		{ id: 14, x: 3, y: 1, value: '0' },
		{ id: 15, x: 3, y: 2, value: '0' },
		{ id: 16, x: 3, y: 3, value: '0' }
	]);

	useEffect(() => {
		const onKeyLeft = async ({ key }) => {
			if (key == 'ArrowLeft') {
				let res = await moveLeft(cells);
				console.log(res, 'res');
				setDraw(true);
				setCells(res);
				random(false);
			}
		};
		const onKeyRight = async ({ key }) => {
			if (key == 'ArrowRight') {
				let res = await moveRight(cells);
				console.log(res, 'res');
				setDraw(true);
				setCells(res);
				random(false);
			}
		};

		const onKeyDown = async ({ key }) => {
			if (key == 'ArrowDown') {
				let res = await moveDown(cells);
				console.log(res, 'res');
				setDraw(true);
				setCells(res);
				random(false);
			}
		};

		const onKeyUp = async ({ key }) => {
			if (key == 'ArrowUp') {
				let res = await moveUp(cells);
				console.log(res, 'res');
				setDraw(true);
				setCells(res);
				random(false);
			}
		};

		document.addEventListener('keydown', onKeyDown);
		document.addEventListener('keydown', onKeyUp);
		document.addEventListener('keydown', onKeyLeft);
		document.addEventListener('keydown', onKeyRight);

		let random = async (boolen) => {
			// let random = await randommizer(cells, boolen);
			// setDraw(true);
			// setCells(random);
		};
		random(true);

		return () => {
			document.removeEventListener('keydown', onKeyDown);
			document.removeEventListener('keydown', onKeyUp);
			document.removeEventListener('keydown', onKeyLeft);
			document.removeEventListener('keydown', onKeyRight);
		};
	}, []);

	return (
		<div className='App'>
			<Header score={score} />
			<Field cells={cells} />
		</div>
	);
}

export default App;
