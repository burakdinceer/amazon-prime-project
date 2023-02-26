import React from 'react'
import Leftheader from './LeftNav/Leftheader'
import Rightheader from './RightNav/Rightheader'



const Header = () => {
  return (
   <div>
     <div className= ' container mx-auto font-bold flex items-center justify-between  ' >
     <div><Leftheader/></div>
     <div><Rightheader/></div>
    </div>
    
   </div>
  )
}

export default Header