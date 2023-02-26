import React from 'react'
import Content from '../../components/Content/Content'
import Contine from '../../components/Continue/Contine'
import Header from '../../components/Header/Header'
import Sliders from '../../components/Slider/Sliders'
import TopList from '../../components/TopList/TopList'
import VideoMain from '../../components/Video/VideoMain'


const Home = () => {
  return (
    <div  className= 'bg-slate-900' >
        <div><Header/></div>
        <div>
      <Sliders/>
    </div>
    <div><Contine/></div>
    <div><Content/></div>
    <div><TopList/></div>
     <div><VideoMain/></div>
    </div>
  )
}

export default Home