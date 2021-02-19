import Field from './UI/Field/Field';
import React, { useState, useEffect } from 'react';

/*
{ id: 0, x: 0, y: 0, value: '0' },
{ id: 1, x: 0, y: 1, value: '4' },
{ id: 2, x: 0, y: 2, value: '2' },
{ id: 3, x: 0, y: 3, value: '2' },
{ id: 4, x: 1, y: 0, value: '0' },
{ id: 5, x: 1, y: 1, value: '4' },
{ id: 6, x: 1, y: 2, value: '4' },
{ id: 7, x: 1, y: 3, value: '0' },
{ id: 8, x: 2, y: 0, value: '0' },
{ id: 9, x: 2, y: 1, value: '0' },
{ id: 10, x: 2, y: 2, value: '0' },
{ id: 11, x: 2, y: 3, value: '1' },
{ id: 12, x: 3, y: 0, value: '2' },
{ id: 13, x: 3, y: 1, value: '3' },
{ id: 14, x: 3, y: 2, value: '4' },
{ id: 15, x: 3, y: 3, value: '0' }
*/

function App() {
	const [ draw, setDraw ] = useState(false);
	const [ cells, setCells ] = useState([
		{ id: 0, x: 0, y: 0, value: '0' },
		{ id: 1, x: 0, y: 1, value: '4' },
		{ id: 2, x: 0, y: 2, value: '2' },
		{ id: 3, x: 0, y: 3, value: '2' },
		{ id: 14, x: 3, y: 2, value: '2' },
		{ id: 15, x: 3, y: 3, value: '2' }
	]);

	useEffect(
		() => {
			const moveRight = (array) => {
				const length = array.length;
				let arrayFinal = [];
				for (let i = 0; i < length; i++) {
					if (i % 4 == 0) {
						let fourPos = array[i + 3].value; //0
						let threePos = array[i + 2].value; //4
						let twoPos = array[i + 1].value; //2
						let onePos = array[i].value; //2
						let arr = [ onePos, twoPos, threePos, fourPos ];
						//[0,0,4,4]
						console.log('arr', arr);
						let some = [];

						for (let i = 0; i < arr.length - 1; i++) {
							let integrated = false;
							let element = arr[i];
							let next = arr[i + 1];
							if (integrated) continue;
							if (element == 0) {
								some.push(element);
								continue;
							}
							if (element == next) {
								let num = +element + +next;
								element = '0';
								some.push(element);
								some.push(num.toString());
								i++;
								integrated = true;
								continue;
							} else {
								some.push(element);
							}
						}

						console.log(' ~ some', some);

						arrayFinal.push(some);
					}
				}
				let good = [];

				arrayFinal.map((elem) => elem.map((element) => good.push(element)));
				calculate(good);
			};

			const calculate = (arr) => {
				let temp = Array.from(cells);
				let current = temp.map((elem, index) => {
					return { ...elem, value: arr[index] };
				});
				setTimeout(async () => {
					await setDraw(true);
					await setCells(current);
				}, 2000);
			};
			moveRight(cells);
		},
		[ draw ]
	);

	return (
		<div className='App'>
			<Field cells={cells} />
		</div>
	);
}

export default App;
