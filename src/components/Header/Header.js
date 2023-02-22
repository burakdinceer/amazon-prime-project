import React from 'react'
import { Link } from 'react-router-dom'
import Contine from './Continue/Contine'
import Leftheader from './LeftNav/Leftheader'
import Rightheader from './RightNav/Rightheader'
import Slider from './Slider/Slider'


const Header = () => {
  return (
   <div className= 'bg-slate-900' >
     <div className= ' container mx-auto font-bold flex items-center justify-between ' >
     <div><Leftheader/></div>
     <div><Rightheader/></div>
    </div>
    <div>
      <Slider/>
    </div>
    <div><Contine/></div>
   </div>
  )
}

export default Header