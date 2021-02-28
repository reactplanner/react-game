import Field from './UI/Field/Field';
import React, { useState, useEffect } from 'react';

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
	const [ draw, setDraw ] = useState(false);
	const [ cells, setCells ] = useState([
		{ id: 0, x: 0, y: 0, value: '4' },
		{ id: 1, x: 0, y: 1, value: '4' },
		{ id: 2, x: 0, y: 2, value: '2' },
		{ id: 3, x: 0, y: 3, value: '2' },
		{ id: 4, x: 1, y: 0, value: '2' },
		{ id: 5, x: 1, y: 1, value: '0' },
		{ id: 6, x: 1, y: 2, value: '0' },
		{ id: 7, x: 1, y: 3, value: '2' },
		{ id: 8, x: 2, y: 0, value: '0' },
		{ id: 9, x: 2, y: 1, value: '0' },
		{ id: 10, x: 2, y: 2, value: '0' },
		{ id: 11, x: 2, y: 3, value: '0' },
		{ id: 12, x: 3, y: 0, value: '0' },
		{ id: 13, x: 3, y: 1, value: '8' },
		{ id: 14, x: 3, y: 2, value: '8' },
		{ id: 15, x: 3, y: 3, value: '0' }
	]);

	const chooseRow = (array, row) =>
		array
			.map((elem) => {
				return elem.x == row ? elem : null;
			})
			.filter((e) => e);

	const moveRight = async (array) => {
		let one = chooseRow(array, 0);
		let two = chooseRow(array, 1);
		let three = chooseRow(array, 2);
		let four = chooseRow(array, 3);
		let global = [].concat(filtered(one), filtered(two), filtered(three), filtered(four));
		return await global;
	};

	const filtered = (array) => {
		let arrayZ = array;

		for (let i = 0; i < arrayZ.length - 1; i++) {
			const element = arrayZ[i];
			let next = arrayZ[i + 1];

			if (next.value == '0') {
				let temp = element.value;
				element.value = next.value;
				next.value = temp;
			}
			if (element.value < next.value) {
				continue;
			}
			if (element.value == next.value) {
				next.value = (element.value * 2).toString();
				element.value = '0';
				for (let j = i; j > 0; j--) {
					const element = array[j];
					let prev = arrayZ[j - 1];
					let temp = element.value;
					element.value = prev.value;
					prev.value = temp;
				}
			}
		}
		return arrayZ;
		// let temp = [];
		// let finish = [];
		// for (let i = 0; i < arrayZ.length - 1; i++) {
		// 	const element = arrayZ[i];
		// 	let next = arrayZ[i + 1];

		// 	if (element.value == next.value) {
		// 		next.value = (element.value * 2).toString();
		// 		temp.push(next);
		// 		i++;
		// 	} else {
		// 		temp.push(element);
		// 	}
		// }
		// sort parametr y in right move
		// if (temp.length < 4) {
		// 	let real = 3;
		// 	for (let i = temp.length - 1; i >= 0; i--) {
		// 		const elem = temp[i];
		// 		elem.y == real ? finish.push(elem) : finish.push({ ...elem, y: real });
		// 		real--;
		// 	}
		// 	return finish.sort((a, b) => a.y - b.y);
		// }

		// return temp;
	};

	useEffect(() => {
		setTimeout(async () => {
			let res = await moveRight(cells);
			console.log(res, 'res');
			setDraw(true);
			setCells(res);
		}, 2000);
	}, []);

	return (
		<div className='App'>
			<Field cells={cells} />
		</div>
	);
}

export default App;
