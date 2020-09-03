import React from 'react';
import HeaderComponent from '../components/HeaderComponent';
import logo from '../assets/icons/logo.svg';
import './chatContainer.scss';
import Chat from '../components/Chat';
import Search from '../components/Search';

function ChatContainer() {
  return (
    <>
      <HeaderComponent imageIcon={logo} titleHeader='Chat emprendedor' />
      <div className="container-chat">
        <Search />
        <Chat />
      </div>
    </>
  )
}

export default ChatContainer
