import React from 'react';
import Row from '../Row/Row';
import Cell from '../Cell/Cell';
import CellEmpty from '../CellEmpty/CellEmpty';
import './field.sass';

const empty = [
	{ id: 0, x: 0, y: 0, value: '0' },
	{ id: 1, x: 0, y: 1, value: '4' },
	{ id: 2, x: 0, y: 2, value: '2' },
	{ id: 3, x: 0, y: 3, value: '2' },
	{ id: 4, x: 1, y: 0, value: '0' },
	{ id: 5, x: 1, y: 1, value: '4' },
	{ id: 6, x: 1, y: 2, value: '4' },
	{ id: 7, x: 1, y: 3, value: '0' },
	{ id: 8, x: 2, y: 0, value: '0' },
	{ id: 9, x: 2, y: 1, value: '0' },
	{ id: 10, x: 2, y: 2, value: '0' },
	{ id: 11, x: 2, y: 3, value: '1' },
	{ id: 12, x: 3, y: 0, value: '2' },
	{ id: 13, x: 3, y: 1, value: '3' },
	{ id: 14, x: 3, y: 2, value: '4' },
	{ id: 15, x: 3, y: 3, value: '0' }
];

const Field = (props) => {
	return (
		<div className='play-wrapper'>
			<div className='play-cells'>
				<Row
					style={{
						position: 'relative',
						top: '5px'
					}}
				>
					{props.cells.map((e, i) => {
						return <Cell key={i} id={e.id} x={e.x} y={e.y} value={e.value} />;
					})}
				</Row>
				<Row
					style={{
						position: 'absolute',
						left: '0'
					}}
					name='play-background'
				>
					{empty.map((e, i) => {
						return <CellEmpty key={i} id={e.id} x={e.x} y={e.y} value={e.value} />;
					})}
				</Row>
			</div>
		</div>
	);
};

export default Field;
