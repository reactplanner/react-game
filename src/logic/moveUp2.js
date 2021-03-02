const moveUp = async (array) => {
	let temp = [];
	for (let i = 0; i < array.length; i++) {
		const element = array[i];
		let zero = [];
		if (element.id % 4 == 0) {
			let one = array[i];
			let two = array[i - 1];
			let three = array[i - 2];
			let four = array[i - 3];
			zero.push(four, three, two, one);
			temp.push(zero);
		}
	}
	// transfer blocks
	for (let i = 3; i > 0; i--) {
		const element = temp[i];
		let next = temp[i - 1];
		for (let j = 0; j < 4; j++) {
			const elOne = element[j];
			let elTwo = next[j];
			if (elTwo.value == '0') {
				elTwo.value = elOne.value;
				elOne.value = '0';
			}
			if (elOne.value == elTwo.value) {
				elTwo.value = (elTwo.value * 2).toString();
				elOne.value = '0';
			}
		}
	}
	let global = [].concat(temp[0], temp[1], temp[2], temp[3]);
	return await global;
};

export default moveUp;
