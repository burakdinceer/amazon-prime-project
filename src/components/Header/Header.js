import React from 'react'
import { Link } from 'react-router-dom'
import Leftheader from './Leftheader'
import Rightheader from './Rightheader'


const Header = () => {
  return (
   <div className= 'bg-slate-800' >
     <div className= ' container mx-auto font-bold flex items-center justify-between ' >
     <div><Leftheader/></div>
     <div><Rightheader/></div>

    </div>
   </div>
  )
}

export default Header