import React from 'react';
import './InputBt.scss';

const InputBt = ({placeholder, value, className, onChange, onClick}) => {
	return (
		<div className="inputBt-container">
			<input placeholder={placeholder} value={value} className={className} onChange={onChange}></input>
			<button onClick={onClick} className="send-chat">Send</button>
		</div>
	);
}

export default InputBt;
//className="input-chat" placeholder="Escribe un mensaje"