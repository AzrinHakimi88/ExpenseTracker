import Image from 'next/image'
import React from 'react'

const SideBar = () => {
  return (
    <div className='hidden md:flex flex-col md:h-screen md:w-28 bg-blue-800 transition-all duration-500 hover:w-60 '>
      <div className='flex flex-col'>
        <div className='flex items-center hover:bg-slate-400 p-4 m-4 rounded-lg overflow-hidden'>
          <Image className='ml-1' src='/dashboard.png' width={36} height={36} />
          <span className='ml-8'>
            <h1 className='text-xl text-white'>Dashboard</h1>
          </span>
        </div>
        
        <div className='flex  items-center hover:bg-slate-400 p-4 m-4 rounded-lg overflow-hidden'>          
            <Image className='ml-1 ' src='/dashboard.png' width={36} height={36}></Image>          
            <span className='ml-8'>
                <h1 className='text-xl text-white'></h1>
            </span>
        </div>

        <div className='flex  items-center hover:bg-slate-400 p-4 m-4 rounded-lg overflow-hidden'>          
            <Image className='ml-1 ' src='/dashboard.png' width={36} height={36}></Image>          
            <span className='ml-8'>
                <h1 className='text-xl text-white'></h1>
            </span>
        </div>

        <div className='flex  items-center hover:bg-slate-400 p-4 m-4 rounded-lg overflow-hidden'>          
            <Image className='ml-1' src='/dashboard.png' width={36} height={36}></Image>          
            <span className='ml-8'>
                <h1 className='text-xl text-white'></h1>
            </span>
        </div>
        
        </div>
    </div>
  )
}

export default SideBar