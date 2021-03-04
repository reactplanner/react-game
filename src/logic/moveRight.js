import chooseRow from './chooseRow';
const moveRight = async (array) => {
	let score = 0;
	let one = chooseRow(array, 0);
	let two = chooseRow(array, 1);
	let three = chooseRow(array, 2);
	let four = chooseRow(array, 3);
	let global = [].concat(filteredToRight(one), filteredToRight(two), filteredToRight(three), filteredToRight(four));

	function filteredToRight(array) {
		let arrayZ = array;
		let connection = false;
		for (let i = 0; i < arrayZ.length - 1; i++) {
			const element = arrayZ[i];
			let next = arrayZ[i + 1];

			if (element.value == '0') {
				for (let j = i; j > 0; j--) {
					const element = arrayZ[j];
					let prev = arrayZ[j - 1];
					let temp = element.value;
					element.value = prev.value;
					prev.value = temp;
				}
				if (element.value == next.value) {
					continue;
				}
			}

			if (next.value == '0') {
				let temp = element.value;
				element.value = next.value;
				next.value = temp;
				for (let j = i; j > 0; j--) {
					const element = arrayZ[j];
					let prev = arrayZ[j - 1];
					let temp = element.value;
					element.value = prev.value;
					prev.value = temp;
				}
			}
			if (element.value < next.value) {
				continue;
			}
			if (element.value == next.value) {
				if (connection) {
					continue;
				}
				next.value = (element.value * 2).toString();
				element.value = '0';
				score += +next.value;
				if (next.value > 0) {
					connection = true;
				}
				for (let j = i; j > 0; j--) {
					const element = arrayZ[j];
					let prev = arrayZ[j - 1];
					let temp = element.value;
					element.value = prev.value;
					prev.value = temp;
				}
			}
		}
		return arrayZ;
	}

	return await { array: global, score };
};

export { moveRight };
