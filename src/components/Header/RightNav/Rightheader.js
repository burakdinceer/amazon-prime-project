import React from 'react'
import { Link } from 'react-router-dom'
const Rightheader = () => {
  return (
    <div>
         <div>
        <div className='flex items-center ml-10 space-x-4 text-white  '>
            <div ><input placeholder='Ara' className='bg-slate-800 border border-white h-5 lg:h-10 w-24 lg:w-60 rounded-sm'/></div>
            <Link >Users</Link>

        </div>
    </div>
    </div>
  )
}

export default Rightheader