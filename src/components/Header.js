import React from 'react';
import './header.sass';

const Header = (props) => {
	return <div className='header'>Your score: {props.score}</div>;
};

export default Header;
