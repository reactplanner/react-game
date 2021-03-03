import React from 'react';
import './arrow.sass';

const Arrow = ({ arrow }) => {
	let side = '';
	switch (arrow) {
		case 'left':
			side = '←';
			break;
		case 'right':
			side = '→';
			break;
		case 'up':
			side = '↑';
			break;
		case 'down':
			side = '↓';
			break;
		default:
			side = '_';
			break;
	}
	return (
		<div className='arrow'>
			<p>{side}</p>
		</div>
	);
};

export default Arrow;
