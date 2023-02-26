import React from 'react'
import VideoText from './VideosText'
import Videos from './Videos'

const VideoMain = () => {
  return (
    <div className='container mx-auto '>
        <h2 className='text-white text-2xl'><span className='text-blue-500 text-3xl'>prime</span> Sizin için önizlemeler</h2>
        <p className='text-gray-500'>İzlediklerinize göre sizin için seçilmiştir</p>
        <div className='flex flex-wrap '>
       <div className='basis-full lg:basis-2/5'> <VideoText/></div>
        <div className='basis-full lg:basis-3/5'><Videos/></div>
    </div>
    </div>
  )
}

export default VideoMain