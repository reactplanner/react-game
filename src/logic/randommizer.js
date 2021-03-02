const randommizer = (array, start) => {
	let empty = array.filter((e) => e.value == '0');
	let one = Math.floor(Math.random() * Math.floor(empty.length));
	if (start) {
		let two = Math.floor(Math.random() * Math.floor(empty.length));
		if (one == two) {
			two = Math.floor(Math.random() * empty.length);
		}
		array[one].value = Math.random() > 0.5 ? '2' : '4';
		array[two].value = Math.random() > 0.5 ? '2' : '4';
		start = false;
	} else {
		array[one].value = Math.random() > 0.5 ? '2' : '4';
	}

	return array;
};

export default randommizer;
