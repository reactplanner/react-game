import chooseRow from './chooseRow';

const moveLeft = async (array) => {
	let score = 0;
	let one = chooseRow(array, 0);
	let two = chooseRow(array, 1);
	let three = chooseRow(array, 2);
	let four = chooseRow(array, 3);

	let global = [].concat(filteredToLeft(one), filteredToLeft(two), filteredToLeft(three), filteredToLeft(four));

	function filteredToLeft(array) {
		let arrayZ = array;

		for (let i = arrayZ.length - 1; i > 0; i--) {
			const element = arrayZ[i];
			let next = arrayZ[i - 1];

			if (element.value == 0 && next.value == 0) {
				continue;
			}

			if (next.value == '0') {
				let temp = element.value;
				element.value = next.value;
				next.value = temp;
				for (let j = i; j < arrayZ.length - 1; j++) {
					const element = arrayZ[j];
					let next = arrayZ[j + 1];
					let temp = element.value;
					if (element.value > next.value) {
						continue;
					}
					element.value = next.value;
					next.value = temp;
				}
				if (element.value == next.value) {
					continue;
				}
			}
			if (element.value > next.value) {
				continue;
			}

			if (element.value == next.value) {
				next.value = (element.value * 2).toString();
				element.value = '0';
				score += +next.value;
				for (let j = i; j < arrayZ.length - 1; j++) {
					const element = arrayZ[j];
					let next = arrayZ[j + 1];
					let temp = element.value;
					if (element.value > next.value) {
					} else {
						element.value = next.value;
						next.value = temp;
					}
				}
				i--;
			}
		}
		return arrayZ;
	}

	return await { array: global, score };
};

export default moveLeft;
