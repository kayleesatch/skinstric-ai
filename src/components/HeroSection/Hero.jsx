import React, { useRef, useState } from 'react';
import CenterTitle from './CenterTitle';
import LeftTriangle from './LeftTriangle';
import RightTriangle from './RightTriangle';
import HeroPara from './HeroPara';
import Diamond from './Diamond';


const Hero = () => {
  const [slideDirection, setSlideDirection] = useState(null);
  let timeoutRef = useRef();

  const handleHover = (direction) => {
    console.log('Hover direction:', direction);
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
      <Diamond />

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
