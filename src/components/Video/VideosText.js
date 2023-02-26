import React from 'react'
import {FaInfoCircle} from 'react-icons/fa'

const VideoText = () => {
  return (
    <div className='relative '>
      <div className='h-96 bg-gradient-to-r from-black to-transparent gradient'>
      <h3 className='absolute top-7 left-10 text-white font-bold text-3xl'>The Bourne Legacy</h3>
     <div className='absolute bottom-14 left-5 w-10 h-10 bg-gray-500 rounded-full  '>  <FaInfoCircle className='absolute text-2xl bottom-2 left-2'/> </div>
     <div className='flex absolute bottom-4 left-5'>
     <div className='border-y border-x mr-2 bg-slate-900 rounded-sm'> <p className='text-gray-500 text-sm'>16+</p></div>
      <p className='text-white font-bold'>Gerilim</p>
     </div>
      <img  className='h-96 opacity-50 blur-md' alt='NoneImages' src='./videoImg.jpg'/>


      </div>
      
    </div>
  )
}

export default VideoText