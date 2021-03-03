import React from 'react';
import Row from '../Row/Row';
import Cell from '../Cell/Cell';
import CellEmpty from '../CellEmpty/CellEmpty';
import './field.sass';
import { Empty } from '../../logic/empty';

const Field = (props) => {
	return (
		<div className='play-wrapper'>
			<div className='play-cells'>
				{props.reroll ? (
					<div className='play-reroll'>
						<p
							onClick={async () => {
								props.onGo();
							}}
						>
							Заново
						</p>
					</div>
				) : null}
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
					{Empty.map((e, i) => {
						return <CellEmpty key={i} id={e.id} x={e.x} y={e.y} value={e.value} />;
					})}
				</Row>
			</div>
		</div>
	);
};

export default Field;
