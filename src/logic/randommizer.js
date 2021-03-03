const randommizer = (array, start) => {
	console.log(' ~ start', start);
	console.log(' ~ array', array);
	let empty = array.filter((e) => e.value == '0');
	if (empty.length == 0) {
		return false;
	}
	let one = Math.floor(Math.random() * Math.floor(empty.length));
	if (start) {
		let two = Math.floor(Math.random() * Math.floor(empty.length));
		if (one == two) {
			two = Math.floor(Math.random() * empty.length);
		}
		empty[one].value = Math.random() > 0.5 ? '2' : '4';
		empty[two].value = Math.random() > 0.5 ? '2' : '4';
		console.log(empty[one], 'pervoe');
		console.log(empty[two], 'vtoroe');
		start = false;
	} else {
		empty[one].value = Math.random() > 0.5 ? '2' : '4';
	}

	return array;
};

export default randommizer;
