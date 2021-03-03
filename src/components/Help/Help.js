import React, { useState } from 'react';
import keybord from './keybord.png';
import close from './close.png';
import './help.sass';

const Help = () => {
	const [ show, setShow ] = useState(false);
	{
		return show ? (
			<div className='help-show help-show__active'>
				<div className='help-text'>
					<div
						className='help-close'
						onClick={() => {
							setShow(false);
						}}
					>
						<img src={close} alt='close' />
					</div>
					<h3>Правила игры</h3>
					<p>
						Нажатием стрелки игрок может скинуть все плитки игрового поля в одну из 4 сторон. Если при
						сбрасывании две плитки одного номинала «налетают» одна на другую, то они превращаются в одну,
						номинал которой равен сумме соединившихся плиток
					</p>
					<p>
						Для передвижения плиток использовать стрелки, представленные на картинке (искать стрелки на
						клавиатуре*)
					</p>
					<div className='help-key'>
						<img src={keybord} alt='keyboard' />
					</div>
				</div>
			</div>
		) : (
			<div className='help'>
				<div className='help-hide'>
					<div className='help-q'>
						<button
							onClick={() => {
								setShow(true);
							}}
						>
							?
						</button>
					</div>
				</div>
			</div>
		);
	}
};

export default Help;
