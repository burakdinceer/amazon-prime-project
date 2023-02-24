import React from 'react'
import { Link } from 'react-router-dom'
const Leftheader = () => {
  return (
    <div>
        <div className= 'h-20 flex    text-white'>
       <div className='flex items-center '>
       <img className='h-20' src='./logoamazon.png' alt='Images'/>
        <div className='hidden md:flex ml-8 space-x-4 text-sm lg:text-lg whitespace-nowrap'>
         <Link className='border-b'> Anasayfa</Link>
         <Link> Tv Dizileri</Link>
         <Link> Filmler</Link>
         <Link> Kategoriler</Link>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Leftheader