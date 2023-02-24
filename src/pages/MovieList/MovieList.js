import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Header from '../../components/Header/Header'
import { fetchData } from '../../redux/dataSlice'

const MovieList = () => {
  const dispatch =  useDispatch()
   const {movies} = useSelector((state) => state.data)
   useEffect(() => {
    dispatch(fetchData())
   },[]) 
  return (
    <div className='bg-slate-800'>
        <div ><Header/></div>
        <div>
        <h2 className=" text-white ml-2 p-6 text-sm lg:text-xl">Amazon Orijinal ve Özel İçerikler
       </h2>
        <div className="flex flex-wrap container mx-auto">
         {
          movies.map((item,rank) => (
           <div className="group basis-1/2 lg:basis-1/4  ">
                    <div><img className="w-2/3 h-28  group-hover:scale-110 group-hover:opacity-50 duration-500" alt="Movie" src={item.thumbnail}/></div>
            
                      <div className="text-white text-xs opacity-0 group-hover:mt-2  group-hover:opacity-100 duration-500 w-2/3 "> 
                     {item.title}
                    {item.description}
                    <div className="text-lg">{item.rating}</div>
                     </div>
              </div>     
          )
         
            
            
          )
         }
          
       

      </div>
        </div>
    </div>
  )
}

export default MovieList