import React from 'react'
import HeaderComponent from '../components/HeaderComponent'
import logo from '../assets/icons/logo.svg'
import './chatContainer.scss'
import Chat from '../components/Chat'
import Search from '../components/Search'

function ChatContainer() {
  return (
    <>
      <HeaderComponent imageIcon={logo} titleHeader='Chat emprendedor' />
      <Search />
      <Chat />
    </>
  )
}

export default ChatContainer
