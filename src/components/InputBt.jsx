import React from 'react';
import './InputBt.scss';

const InputBt = () => {
	return (
		<div className="inputBt-container">
			<input className="input-chat"></input>
			<button className="send-chat">Send</button>
		</div>
	);
}

export default InputBt;