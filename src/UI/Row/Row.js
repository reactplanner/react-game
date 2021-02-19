import React from 'react';

const Row = (props) => {
	return (
		<div className='play-row' className={`${props.name ? props.name : ''}`} style={props.style}>
			{props.children}
		</div>
	);
};

export default Row;
