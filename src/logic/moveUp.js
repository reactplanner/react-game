const moveUp = async (array) => {
	let score = 0;
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
		for (let i = array.length - 1; i > 0; i--) {
			const element = array[i];
			let prev = array[i - 1];
			if (element.value == prev.value) {
				prev.value = (prev.value * 2).toString();
				element.value = '0';
				score += +prev.value;
				for (let j = i; j < array.length - 1; j++) {
					const element = array[j];
					let next = array[j + 1];
					if (element.value < next.value) {
						let temp = element.value;
						element.value = next.value;
						next.value = temp;
					}
				}
			}
			if (prev.value == '0') {
				let temp = element.value;
				element.value = prev.value;
				prev.value = temp;
				for (let j = i; j < array.length - 1; j++) {
					const element = array[j];
					let next = array[j + 1];
					if (element.value < next.value) {
						let temp = element.value;
						element.value = next.value;
						next.value = temp;
					}
				}
			}

			if (element.value > prev.value) {
				continue;
			}
		}

		return array;
	}

	temp = [].concat(recall(one), recall(two), recall(three), recall(four)).sort((a, b) => {
		return a.id > b.id ? 1 : -1;
	});

	console.log(temp, 'temp');

	let global = temp;
	//.concat(filteredToRight(one), filteredToRight(two), filteredToRight(three), filteredToRight(four));

	return await { array: global, score };
};

export default moveUp;
