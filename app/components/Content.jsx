import React from 'react'

const Content = () => {
  return (
    <div className='h-screen bg-slate-800 w-full '>
      <div className='flex justify-center items-center w-full pt-3'>
        <input type="text" placeholder=' Enter a movie name...' className='text-[18px] mr-4 outline-none rounded-md p-2 w-[400px]'/>
        <button className='text-[18px] border border-white text-white mr-4 outline-none rounded-md p-2 w-[100px] font-bold'>Search</button>
      </div>
    </div>
  )
}

export default Content