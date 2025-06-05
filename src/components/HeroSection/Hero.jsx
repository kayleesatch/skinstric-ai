import React, { useRef, useState } from 'react';
import CenterTitle from '@/components/HeroSection/CenterTitle';
import LeftTriangle from '@/components/HeroSection/LeftTriangle';
import RightTriangle from '@/components/HeroSection/RightTriangle';
import HeroPara from '@/components/HeroSection/HeroPara';
import Diamond from '@/components/HeroSection/Diamond';


const Hero = () => {
  const [slideDirection, setSlideDirection] = useState(null);
  
  let timeoutRef = useRef();

  const handleHover = (direction) => {
    clearTimeout(timeoutRef.current);
    if (direction) {
      setSlideDirection(direction);
    } else {
      timeoutRef.current = setTimeout(() => {
        setSlideDirection(null);
      }, 200)
    }
  }

  return (
    <section className='relative w-full h-screen bg-white flex items-center justify-center'>
      <Diamond forceVisible />

      <div className='absolute inset-0 flex items-center justify-center z-10'>
        <CenterTitle slideDirection={slideDirection}/>
      </div>

      <div className='hidden lg:flex absolute inset-0 items-center justify-between px-6 z-20'>
        <div className='w-[200px]'>
          <LeftTriangle hidden={slideDirection === 'right'} onHover={handleHover} />
        </div>
        <div className='w-[200px]'>
          <RightTriangle hidden={slideDirection === 'left'} onHover={handleHover} />
        </div>
      </div>

      <div className='hidden lg:block absolute bottom-20 left-6 z-30'>
        <HeroPara />
      </div>
    </section>
  )
}

export default Hero
