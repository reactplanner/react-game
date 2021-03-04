const moveDown = async (array) => {
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
		let connection = false;
		for (let i = 0; i < array.length - 1; i++) {
			const element = array[i];
			let next = array[i + 1];
			if (next.value === '0') {
				temp = element.value;
				next.value = temp;
				element.value = '0';
			}
			if (element.value === '0') {
				for (let j = i; j > 0; j--) {
					const element = array[j];
					let prev = array[j - 1];
					if (element.value < prev.value) {
						let temp = element.value;
						element.value = prev.value;
						prev.value = temp;
					}
				}
				if (element.value === next.value) {
					continue;
				}
			}

			if (element.value === next.value) {
				if (connection) {
					continue;
				}
				next.value = (next.value * 2).toString();
				element.value = '0';
				score += +next.value;

				for (let j = i; j > 0; j--) {
					const element = array[j];
					let prev = array[j - 1];
					if (element.value < prev.value) {
						let temp = element.value;
						element.value = prev.value;
						prev.value = temp;
					}
				}
				if (next.value > 0) {
					connection = true;
				}
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
	return await { array: global, score };
};

export default moveDown;
