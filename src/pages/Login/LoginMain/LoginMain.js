import React from 'react'
import { Link } from 'react-router-dom'

const LoginMain = () => {
    
  return (
    <div className=' h-164 w-full bg-black '>
       <div className=' text-white container flex '>
       <div className='basis-1/2'>
           
           </div>
           <div  className='basis-1/2 mt-20 ml-10'>
             <h2 className='text-5xl'>
             Amazon Prime artık Türkiye'de
             </h2>
             <p className='text-2xl mt-5'>Ödüllü Amazon Originals yapımları da dahil popüler filmleri ve TV dizilerini izlemek için Amazon Prime'lı olun. Amazon Prime ayrıca binlerce ürün ve daha fazlasında ücretsiz ve hızlı teslimat sunar.</p>
             <div>
                <Link to={'/loginsing'}><button  className='h-12 w-54 bg-blue-600 rounded-md p-2 mt-10'>Prime Üyesi misiniz? Giriş Yap</button></Link>
             </div>
             <div>
                <Link to={'/loginsing'}><button className='h-16 w-54 bg-blue-600 rounded-md p-2 mt-10'>30 Günlük Deneme Süresini Başlatın*</button></Link>
             </div>
             <h4 className='mt-10'>* 30 gün sonra Amazon Prime aylık 7,90 TRY ücretle otomatik olarak yenilenir.</h4>
           </div>
           
       </div>
    </div>
  )
}

export default LoginMain