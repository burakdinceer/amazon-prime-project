import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchData } from "../../redux/dataSlice"
import React from 'react'
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { useNavigate } from "react-router-dom"
const Contine = () => {

  const dispatch = useDispatch()
  const { movies } = useSelector((state) => state.data)
  const navigate = useNavigate()
  useEffect(() => {
    dispatch(fetchData())
  }, [])
 

  const handlePage = (key) => {
      navigate(`/home/details/${key}`)
      
  }
 

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };


  return (
    <div className="container mx-auto" >
      <h1 className=" text-white mr-6 p-2 text-sm lg:text-xl">İzlemeye Devam Et</h1>
      <Slider  {...settings}>
      {
        movies.map((item,rank) => {
          if(rank<8) {
return          <div onClick={()=>handlePage(item.rank)}  key={item.rank} className="group">
            <div>
              <img className="w-full h-28  group-hover:scale-110 group-hover:opacity-50 duration-500 " alt="images" src={item.thumbnail}/>
           </div>
           <div className="text-white text-xs opacity-0 group-hover:mt-2  group-hover:opacity-100 duration-500">
           <h1>{item.title}</h1>
           <p>{item.description}</p>
           <p className="text-lg">{item.rating}</p>
           
         </div>
         
          </div>}
        })
      }
    
      </Slider>
    </div>
  )
}

export default Contine

