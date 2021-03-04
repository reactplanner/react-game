import React from 'react';
import Logo from './rs_school_js.svg';
import './social.sass';

const Social = () => {
	return (
		<div className='social'>
			<h4>
				Игра: <b>2048</b> / Дата: 2021/02/03
			</h4>
			<ul>
				<li>
					<a href='https://github.com/reactplanner'>GitHub</a>
				</li>
				<li>
					<a href='https://youtu.be/cNHu0QtYXBo'>Youtube</a>
				</li>
				<li>
					<a href='https://rs.school/js/'>
						<img src={Logo} alt='rs school' />
					</a>
				</li>
			</ul>
		</div>
	);
};

export default Social;
