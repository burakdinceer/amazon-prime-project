import React from 'react'
import LoginMain from './LoginMain/LoginMain'
import LoginText from './LoginText/LoginText'
import { Link } from 'react-router-dom'


const Login = () => {
  return (
    <div className='bg-slate-800 h-20 '>
       <div className='flex items-center justify-between container mx-auto  text-white'>

          <img className='h-20' src='./logoamazon.png' alt='Images'/>

        <Link to={'/loginsing'} ><button>Giriş Yap</button></Link>
        </div>
        <LoginText/>
        <LoginMain/>
    </div>
  )
}

export default Login