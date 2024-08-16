'use client'
import React, { useEffect } from 'react'


const GoogleAd = () => {
    useEffect(() => {
        const ads = document.createElement('script');
        ads.async = true;
        ads.src = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js';
        document.head.appendChild(ads);
    
        return () => {
          document.head.removeChild(ads);
        };
      }, []);
    
  return (
    <>
     <ins className="adsbygoogle"
      style={{ display: 'block' }}
      data-ad-client="ca-pub-8394194998041636"  // Reemplaza "ca-pub-XXXXXX" con tu ID de cliente
      data-ad-slot="4015361772"           // Reemplaza "YYYYYY" con el ID de tu slot de anuncio
      data-ad-format="auto"
      data-full-width-responsive="true"></ins>
      
    </>
  )
}

export default GoogleAd
