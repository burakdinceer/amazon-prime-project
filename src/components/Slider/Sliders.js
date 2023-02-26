import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
const Sliders = () => {
  
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  }; 
  return (
    
      <Slider {...settings}>
      <div className='h-52 md:h-80 lg:h-96'>
        <img  className=' h-full w-full' src='./amazonslider.webp' alt='İmages'/>
     </div>
     <div className='h-52 md:h-80 lg:h-96'>
        <img  className=' h-full w-full' src='./slider2.webp' alt='İmages'/>
     </div>
     <div className='h-52 md:h-80 lg:h-96'>
        <img  className=' h-full w-full' src='./slider3.webp' alt='İmages'/>
     </div>
      </Slider>
   
    
  )
}

export default Sliders