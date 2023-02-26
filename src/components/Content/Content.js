import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchData } from '../../redux/dataSlice'
import { Link } from 'react-router-dom'
import OwlCarousel from 'react-owl-carousel'
import 'owl.carousel/dist/assets/owl.carousel.min.css'
import 'owl.carousel/dist/assets/owl.theme.default.min.css'


const Content = () => {
   const dispatch = useDispatch()
   const {movies} = useSelector((state) => state.data)
   useEffect(() => {
    dispatch(fetchData());
   },[])
  return (
    <div>
      <div className='flex items-center container mx-auto'>
      <h2 className=" text-white mr-6 p-2 text-sm lg:text-xl">Amazon Orijinal ve Özel İçerikler
     </h2>
     <Link to='/movielist' className='text-blue-500'>Daha Fazlasını Görüntüle</Link>
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
         return <div className="item p-3 group relative basis-1/2 lg:basis-1/4">
                    <div><img className="w-full h-28  group-hover:scale-110 group-hover:opacity-50 duration-500" alt="Movie" src={item.thumbnail}/></div>
            
                      <div className="text-white text-xs opacity-0 group-hover:mt-2  group-hover:opacity-100 duration-500"> 
                     {item.title}
                    {item.description}
                    <div className="text-lg">{item.rating}</div>
                     </div>
              </div>     
            }
            
          })
         }
          
       

      </div>
    </OwlCarousel>
    </div>
  )
}

export default Content