import React from 'react';

const Cell = ({ id, x, y, value }) => {
	const position = () => {
		let width = 127,
			height = 124;
		return {
			transform: `translate(${y * width}px, ${x * height}px)`,
			height: '107px',
			width: '107px'
		};
	};

	return (
		<div className={`play-cell ${value ? 'play-cell-' + value : ''} play-position-${x}-${y}`} style={position()}>
			{value}
		</div>
	);
};

export default Cell;
