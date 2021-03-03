import React from 'react';
import useWindowSize from '../../hooks/useWindowSize';

const CellEmpty = (id, x, y, value) => {
	const size = useWindowSize();
	const position = () => {
		if (size.width > 700) {
			let width = 123,
				height = 123;
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
				width: '80px',
				marginBottom: '9px'
			};
		}
	};

	return <div style={position()} className='play-tiles-bg' />;
};

export default CellEmpty;
