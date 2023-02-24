import React from 'react'
import Content from '../../components/Content/Content'
import Contine from '../../components/Continue/Contine'
import Header from '../../components/Header/Header'
import Slider from '../../components/Slider/Slider'

const Home = () => {
  return (
    <div  className= 'bg-slate-900' >
        <div><Header/></div>
        <div>
      <Slider/>
    </div>
    <div><Contine/></div>
    <div><Content/></div>
    </div>
  )
}

export default Home