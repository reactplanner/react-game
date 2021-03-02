const chooseRow = (array, row) =>
	array
		.map((elem) => {
			return elem.x == row ? elem : null;
		})
		.filter((e) => e);

export default chooseRow;
