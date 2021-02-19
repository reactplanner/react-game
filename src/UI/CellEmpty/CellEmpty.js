import React from 'react';

const CellEmpty = (id, x, y, value) => {
	const position = () => {
		let width = 123,
			height = 123;
		return {
			transform: `translate(${y * width}px, ${x * height}px)`,
			height: '107px',
			width: '107px'
		};
	};

	return <div style={position()} className='play-tiles-bg' />;
};

export default CellEmpty;
