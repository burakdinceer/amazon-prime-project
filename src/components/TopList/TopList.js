import React, { useEffect } from 'react'
import {FaPlay,FaPlus,FaInfo} from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux'
import { fetchData } from '../../redux/dataSlice'
import OwlCarousel from 'react-owl-carousel'
import 'owl.carousel/dist/assets/owl.carousel.min.css'
import 'owl.carousel/dist/assets/owl.theme.default.min.css'
const TopList = () => {
   const dispatch = useDispatch()
    const {movies} = useSelector((state) => state.data)
   useEffect(() => {
    dispatch(fetchData())
   },[])
  return (
    <div className='container mx-auto relative group  '>
        <img className='h-128 w-full  ' alt='anime' src='./anime.jpg'/>

       <div className='absolute top-0 h-128 w-1/2 bg-gradient-to-r from-slate-900 to-transparent'>
       </div>

       <h2 className='absolute top-5 left-5 text-3xl text-white'>Türkiye İlk 10</h2> 
       <div className='absolute top-80 left-5 text-white'>
        <h3 className='text-3xl mb-2'>Vox Machina Efsanesi - 2. Sezon</h3>
        <p>Komedi, Animasyon, Fantastik</p>

        <div className='flex'>
        <button className='bg-blue-500 w-40 h-12 rounded-3xl mt-2'><FaPlay className='absolute bottom-4 left-2' /> Oynat: 2. S 1. B</button>
         <button className='bg-gray-500 w-8 h-8 absolute bottom-2 left-40 ml-2 rounded-2xl'><FaPlus className='w-8 h-6'/></button>
         <button className='bg-gray-500 w-8 h-8 absolute bottom-2 left-52 rounded-2xl'><FaInfo className='w-8 h-6' /></button>
        </div>
         

       </div>
       <OwlCarousel
      className='owl-theme'
      items='1'
      autoplay
      nav
      dots
      loop>
      <div className="flex flex-wrap container mx-auto">
         {
          movies.map((item,rank) => {
            if(rank <4){
         return <div className="item p-3 group relative basis-1/2 lg:basis-1/4 ">
                    <div>{item.rank}</div>
                    <div>                
                     <img className="!w-2/3 h-28 " alt="Movie" src={item.thumbnail}/></div>
              </div>     
            }
            
          })
         }
          
       

      </div>
    </OwlCarousel>
    </div>
  )
}

export default TopList