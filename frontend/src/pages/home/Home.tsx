import React from 'react'
import Sidebar from '../../components/SideBar/Sidebar'
import MessageContainer from '../../components/Messages/MessageContainer/MessageContainer'

const Home = () => {
  return (
    <div className='flex sm:h-[450px] md:h-[550px] rounded-lg overflow-hidden bg-gray-400 bg-clipping-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
      <Sidebar/>
      <MessageContainer/>
    </div>
  )
}

export default Home
