import React from 'react';
import Row from '../Row/Row';
import Cell from '../Cell/Cell';
import CellEmpty from '../CellEmpty/CellEmpty';
import './field.sass';
import { cellReducerAction } from '../../reducer/cellReducer';
import { setStartAction } from '../../reducer/optionReducer';
import { useDispatch } from 'react-redux';
import { Empty } from '../../logic/empty';
import randommizer from '../../logic/randommizer';

const Field = (props) => {
	console.log(props.cells, 'FAIL');
	const dispatch = useDispatch();
	return (
		<div className='play-wrapper'>
			<div className='play-cells'>
				{props.reroll ? (
					<div className='play-reroll'>
						<p
							onClick={async () => {
								let random = await randommizer(Empty, true);
								dispatch(cellReducerAction(random));
								dispatch(setStartAction(false));
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
