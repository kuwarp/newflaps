import  { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import P1 from '../../assets/Images/1.jpg'
import P2 from '../../assets/Images/2.jpg'
import P3 from '../../assets/Images/3.jpg'
import P4 from '../../assets/Images/4.jpg'
import P5 from '../../assets/Images/5.jpg'
const Hero = () => {
  const textRef = useRef(0);

  useEffect(() => {
    if (textRef.current) {
      gsap.from(textRef.current, {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: 'power3.inOut',
        delay: 0.3,
        onComplete: () => {
          gsap.to(textRef.current, { opacity: 1, y: 0 }); 
        }
      });
    }


    gsap.from('.gsap-active', {
      y: 50,
      opacity: 0,
      duration: 1,
      ease: 'power3.inOut',
      delay: 0.3,
      onComplete: () => {
        gsap.to('.gsap-active', { opacity: 1, y: 0 });
      }
    });
  },  []);
  return (
    <>
     <div className="lg:relative lg:overflow-visible block overflow-auto    ">
      <div className="pb-80 pt-16 sm:pb-40 sm:pt-24 lg:pb-48 ">
        <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
          <div className="sm:max-w-lg">
            <h1 ref={textRef} 
            className="text-4xl font-bold tracking-tight text-orange-100 sm:text-6xl">
              Innovation which never  pays less
              </h1>
            <p className="mt-4 text-xl text-gray-500">This year, our new innovation  will shelter you from the harsh elements of a world that doesn't care if you live or die.</p>
          </div>
          <div>
            <div className="mt-10">
             
              <div aria-hidden="true" className="gsap-active pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl">
                <div className="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                  <div className="flex items-center space-x-6 lg:space-x-8">
                    <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                      <div className="h-64 w-44 overflow-hidden rounded-lg sm:opacity-0 lg:opacity-100">
                        <img src={P1} alt="" className="h-full w-full object-cover object-center"/>
                      </div>
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <img src={P2} alt="" className="h-full w-full object-cover object-center"/>
                      </div>
                    </div>
                    <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <img src={P4} alt="" className="h-full w-full object-cover object-center"/>
                      </div>
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <img src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-04.jpg" alt="" className="h-full w-full object-cover object-center"/>
                      </div>
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <img src={P3} alt="" className="h-full w-full object-cover object-center"/>
                      </div>
                    </div>
                    <div className="grid  flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <img src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-06.jpg" alt="" className="h-full w-full object-cover object-center"/>
                      </div>
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <img src={P5} alt="" className="h-full w-full object-cover object-center"/>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
    
              <a href="#" className="inline-block  border rounded-3xl outline-white px-8 py-3 text-center font-medium text-white hover:bg-indigo-700">Shop Collection</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Hero