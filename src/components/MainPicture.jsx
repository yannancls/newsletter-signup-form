import React, { useState, useEffect } from 'react';
import DesktopPicture  from '../assets/images/illustration-sign-up-desktop.svg'
import MobilePicture from '../assets/images/illustration-sign-up-mobile.svg'


const MainPicture = () => {
  const [imageSrc, setImageSrc] = useState(DesktopPicture);

  const updateImageSource = () => {
    if (window.innerWidth <= 670) {
      setImageSrc(MobilePicture);
    } else {
      setImageSrc(DesktopPicture);
    }
  };

  useEffect(() => {
    updateImageSource();

    window.addEventListener('resize', updateImageSource);
  }, []);

  return (
    <>
        <img src={imageSrc} alt='Illustration Sign Up' className='sign-up-img'/>
    </>
  )
}

export default MainPicture