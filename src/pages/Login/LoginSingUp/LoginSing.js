import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const LoginSing = () => {
    const navigate = useNavigate()
    
    
    const [admin,setAdmin] = useState('')
    const [pass,setPass] = useState('')
    const users = {
        name:'burak',
        password:'123'
    }
    
    const handleEmail = (e) => {
      setAdmin(e.target.value)
      console.log(admin)
    }

    const handlePassword = (e) => {
        setPass(e.target.value)
        console.log(pass)
      }

     const getPage = () => {
        if(+admin === +users.name && +pass === +users.password){
            navigate("/home")
        }
       
       
     } 
    
  return (
    <div className='container mx-auto'>
     <form>
     <div className='text-center'>
        <img className='inline-block mt-3' alt='Logo' src='./singamazonlogo.png'/>
     </div>   
        <div className='h-128 w-80 border-x-2 border-y-2 mx-auto mt-5 p-4 rounded-md'>
              <h1 className='text-3xl font-medium'>Giriş Yap</h1>
              <div className='mt-3'>
                <p className='text-sm font-medium'>E-posta adresi veya telefon numarası</p>
                <input type='text' name='text' onChange={(e)=>handleEmail(e)} className='w-full border-x border-y border-gray-400 h-7'/>
              </div>
              <div className='mt-4 text-sm font-medium '>
                <div className='flex justify-between'>
                 <p>Şifre</p>
                 <Link className='text-blue-500'>Şifremi Unuttum</Link>
                </div>
                <input type='password' name='password'  onChange={(e)=>handlePassword(e)} className='w-full h-7 border-x border-y border-gray-400'/>
              </div>
              <button onClick={getPage} className='w-full h-8 bg-gradient-to-t from-yellow-500 to-white rounded-md mt-5'>Giriş Yap</button>
              <div>
            <p className='text-xs mt-4'>Devam ederek Amazon <span className='text-blue-500'>Kullanım Koşulları'nı</span>  kabul etmiş sayılırsınız. Lütfen <span className='text-blue-500'>Gizlilik Bildirimimize, Çerez Bildirimimize ve İlgi Alanına Dayalı Reklamlar Bildirimimize</span> bakın</p>
            <div className='flex mt-3 text-sm'>
                <input type={'checkbox'} name='checkbox'/>
                <p>Oturum Açık Kalsın.</p>
                <Link className='text-blue-500'>Ayrıntılar</Link>
            </div>

            <div className='flex opacity-60 text-xs mt-8 justify-center'>
                <p>---------</p>
                <p >Amazon Hesabın Yok mu?</p>
                <p>---------</p>
            </div>
            <div className='mt-4 text-center border-y border-x border-gray-400 bg-gray-100 text-sm  '>
            <Link><button  className='h-8'>Amazon hesabı oluşturun</button></Link>
            </div>

        </div>
        </div>

     </form>
    </div>
  )
}

export default LoginSing