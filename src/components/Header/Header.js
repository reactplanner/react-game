import React from 'react';
import './header.sass';

const Header = (props) => {
	return <div className='header'>Результат: {props.score}</div>;
};

export default Header;
