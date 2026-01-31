import React from 'react'
import AddEntry from './AddEntry'
import LeftSide from '../component/LeftSide'
import RightSide from '../component/RightSide'

const Dashboard = () => {
  return (
    <div className='h-screen w-screen  flex'>
        <div className='border  w-1/3'>

        <LeftSide/>
        </div>
        <div className='border w-full'>

        <RightSide/>
        </div>
    </div>
  )
}

export default Dashboard