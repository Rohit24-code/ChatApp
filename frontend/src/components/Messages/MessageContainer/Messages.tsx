import React from 'react'
import Message from './Message'
import MessageInput from './MessageInput'

const Messages = () => {
  return (
    <div>
      <div className='flex-1 px-4 overflow-auto '>
        <Message/>
        <Message/>
        <Message/>
        <Message/>
        <Message/>
        <Message/>
        <Message/>

      </div>

      <MessageInput/>
    </div>
  )
}

export default Messages