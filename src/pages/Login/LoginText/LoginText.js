import React from 'react'
import { FaInfoCircle } from 'react-icons/fa'
import { Link } from 'react-router-dom'
const LoginText = () => {
  return (
    <div className='bg-blue-100 '>
       <div className='flex container mx-auto  '>
        <div >
          <FaInfoCircle className='text-4xl'/>
        </div>
        <div>
            <h3>Çerez tercihlerinizi seçin</h3>
            <p>Amazon video hizmetlerinde Çerez Bildirimimizde detaylandırıldığı gibi, alışveriş yapmanızı sağlamak, deneyimlerinizi geliştirmek ve hizmetlerimizi sunmak için gerekli olan çerezleri ve benzer araçları kullanıyoruz. Bu çerezleri, iyileştirmeler yapabilmek için müşterilerin hizmetlerimizi nasıl kullandığını (örneğin, site ziyaretlerini ölçerek) anlamak için de kullanırız.
            Kabul ederseniz, Çerez Bildirimimizde açıklandığı gibi, Amazon video hizmetlerinizdeki alışveriş deneyiminizi desteklemek için de çerezleri kullanacağız. Bu, benzersiz çerezler gibi standart cihaz bilgilerini depolayan veya bunlara erişen birinci ve üçüncü taraf çerezlerin kullanılmasını içerir. Üçüncü taraflar, kişiselleştirilmiş reklamları görüntülemek ve ölçmek, izleyici içgörüleri oluşturmak ve ürünleri geliştirmek ve iyileştirmek amacıyla çerezleri kullanır. Bu çerezleri reddetmek, daha ayrıntılı seçimler yapmak veya daha fazlasını öğrenmek için Çerezleri Özelleştir'i tıklayın. Çerez Bildiriminde açıklandığı gibi Çerez Tercihlerini ziyaret ederek seçimlerinizi istediğiniz zaman değiştirebilirsiniz. Amazon'un kişisel bilgileri (Prime Video İzleme Geçmişi gibi) nasıl ve hangi amaçlarla kullandığı hakkında daha fazla bilgi edinmek için lütfen Gizlilik Bildirimimize göz atın.</p>
        </div>
       </div>
       <div className='container mx-auto mt-5 mr-5 text-lg flex'>
         <Link className='mr-4'>Çerezleri Kabul Et</Link>
         <p>I</p>
         <Link className='ml-4'>Çerezleri Özelleştir</Link>
       </div>
    </div>
  )
}

export default LoginText