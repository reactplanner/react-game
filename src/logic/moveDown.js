// { id: 1, x: 0, y: 0, value: '0' },
// 		{ id: 2, x: 0, y: 1, value: '0' },
// 		{ id: 3, x: 0, y: 2, value: '4' },
// 		{ id: 4, x: 0, y: 3, value: '8' },
// 		{ id: 5, x: 1, y: 0, value: '0' },
// 		{ id: 6, x: 1, y: 1, value: '0' },
// 		{ id: 7, x: 1, y: 2, value: '0' },
// 		{ id: 8, x: 1, y: 3, value: '0' },
// 		{ id: 9, x: 2, y: 0, value: '0' },
// 		{ id: 10, x: 2, y: 1, value: '0' },
// 		{ id: 11, x: 2, y: 2, value: '0' },
// 		{ id: 12, x: 2, y: 3, value: '0' },
// 		{ id: 13, x: 3, y: 0, value: '0' },
// 		{ id: 14, x: 3, y: 1, value: '0' },
// 		{ id: 15, x: 3, y: 2, value: '0' },
// 		{ id: 16, x: 3, y: 3, value: '0' }

const moveDown = async (array) => {
	console.log(array, 'array to down');
	let temp = [];
	let one = [],
		two = [],
		three = [],
		four = [];
	for (let i = 0; i < array.length; i++) {
		switch (array[i].y) {
			case 0:
				one.push(array[i]);
				break;
			case 1:
				two.push(array[i]);
				break;
			case 2:
				three.push(array[i]);
				break;
			case 3:
				four.push(array[i]);
				break;

			default:
				break;
		}
	}

	function recall(array) {
		for (let i = 0; i < array.length - 1; i++) {
			const element = array[i];
			let next = array[i + 1];
			if (next.value == '0') {
				temp = element.value;
				next.value = temp;
				element.value = '0';
			}
			if (element.value == '0') {
				for (let j = i; j > 0; j--) {
					const element = array[j];
					let prev = array[j - 1];
					if (element.value < prev.value) {
						let temp = element.value;
						element.value = prev.value;
						prev.value = temp;
					}
				}
			}

			if (element.value == next.value) {
				next.value = (next.value * 2).toString();
				element.value = '0';
				for (let j = i; j > 0; j--) {
					const element = array[j];
					let prev = array[j - 1];
					if (element.value < prev.value) {
						let temp = element.value;
						element.value = prev.value;
						prev.value = temp;
					}
				}
				i++;
			}
			if (element.value > next.value) {
				continue;
			}
		}

		return array;
	}

	temp = [].concat(recall(one), recall(two), recall(three), recall(four)).sort((a, b) => {
		return a.id > b.id ? 1 : -1;
	});

	let global = temp;
	//.concat(filteredToRight(one), filteredToRight(two), filteredToRight(three), filteredToRight(four));

	return await global;
};

export default moveDown;
