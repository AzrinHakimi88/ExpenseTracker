import Image from 'next/image';
import React from 'react';

const BottomNav = () => {
  return (
    <div className='xl:hidden md:hidden sm:flex-row sticky bottom-0 bg-blue-800 transition-all duration-500'>
      <div className='flex flex-row items-center justify-center'>
        <div className='flex items-center hover:bg-slate-400 p-4 m-4 rounded-lg overflow-hidden'>
          <Image className='ml-1' src='/dashboard.png' width={36} height={36} />
        </div>
        
        <div className='flex items-center hover:bg-slate-400 p-4 m-4 rounded-lg overflow-hidden'>          
            <Image className='ml-1' src='/dashboard.png' width={36} height={36} />          
        </div>

        <div className='flex items-center hover:bg-slate-400 p-4 m-4 rounded-lg overflow-hidden'>          
            <Image className='ml-1' src='/dashboard.png' width={36} height={36} />          
        </div>

        <div className='flex items-center hover:bg-slate-400 p-4 m-4 rounded-lg overflow-hidden'>          
            <Image className='ml-1' src='/dashboard.png' width={36} height={36} />          
        </div>
      </div>
    </div>
  );
};

export default BottomNav;
