import React from 'react';
import useWindowSize from '../../hooks/useWindowSize';

const Cell = ({ id, x, y, value }) => {
	const size = useWindowSize();
	const position = () => {
		if (size.width > 700) {
			let width = 127,
				height = 124;
			return {
				transform: `translate(${y * width}px, ${x * height}px)`,
				height: '107px',
				width: '107px'
			};
		} else {
			let width = 90,
				height = 90;
			return {
				transform: `translate(${y * width + 5}px, ${x * height}px)`,
				height: '80px',
				width: '80px'
			};
		}
	};

	return (
		<div className={`play-cell ${value ? 'play-cell-' + value : ''} play-position-${x}-${y}`} style={position()}>
			{value}
		</div>
	);
};

export default Cell;
