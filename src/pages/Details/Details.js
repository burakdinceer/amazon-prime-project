
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import Header from '../../components/Header/Header'
import { fetchData } from '../../redux/dataSlice'

const Details = () => {
  const {id} =  useParams()
  const dispatch = useDispatch()
  const {movies} = useSelector((state) => state.data)
  useEffect(() => {
    dispatch(fetchData())
},[])

    const getId = (
        movies.filter((item) => (
            +item.rank === +id
        ))
        
    )
    console.log(movies)
  return (
    <div className='bg-gradient-to-b from-black to-slate-800 w-full h-screen' >
       <div className='bg-slate-800 '> <Header/></div>
       
    {
        getId.map((value) => (
            <div className='container mx-auto flex'>
             <div className=' text-white mt-8 basis-1/2'>
            <h1 className='text-2xl'>Amazon Prime</h1>
              <h2 className='text-4xl border-t border-b  mt-3'>{value.title}</h2>  
             <p className='mt-10  text-xl'>{value.description}</p>
             <div className='text-blue-500 font-bold text-4xl mt-5'>prime</div>
            </div>
            <div className='basis-1/2'>
            <video className='h-96 bg-black' controls>
            <source src={value.trailer} />
              </video>
            </div>
            </div>
            
        ))
    }

    </div>
    
  )
}

export default Details