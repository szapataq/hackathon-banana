import React from 'react';
import InputBt from './InputBt';
import Message from './Message';

const MessageContainer = () => {
	return ( 
		<div className="message-container">
			<Message />
			<InputBt />
		</div>
	 );
}
 
export default MessageContainer;