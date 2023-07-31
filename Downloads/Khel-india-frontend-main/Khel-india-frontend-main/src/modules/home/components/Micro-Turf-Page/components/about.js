import React, { useState } from 'react';


// import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
// import { RxDotFilled } from 'react-icons/rx';
import BGLOGO from '../../../../../shared/assets/img/BGLOGO.png';
import RIGHT from '../../../../../shared/assets/img/right.svg';
import LEFT from '../../../../../shared/assets/img/left.svg';
import Booking from './booking';
import instagram from '../../../../../shared/assets/img/instagram.svg'
import linkedin from '../../../../../shared/assets/img/linkedin.svg'
import facebook from '../../../../../shared/assets/img/facebook.svg'
// import img from 'next/image';


const About = ({ data }) => {
  const name=data.turf.name;
  

  const [showModal, setShowModal] = useState(false);
  const handleShowModal = () => {
    setShowModal(false);
  };

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? data.turf.photos.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === data.turf.photos.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div className="h-screen relative lg:flex justifty-center items-center" id='about' style={{backgroundColor:"white"}}>
      <div className="hidden md:block absolute bottom-0 left-0 z-0 overflow-hidden ">
        <svg width="801" height="885" viewBox="0 0 801 885" fill="none" xmlns="http://www.w3.org/2000/svg" className='opacity-30'>
          <g filter="url(#filter0_f_278_139)">
            <path d="M120.55 518.56C250.409 556.585 328.619 708.451 290.346 839.155C252.073 969.86 37.5454 1033.85 -92.3133 995.822C-222.172 957.797 -15.7014 859.141 22.5715 728.436C60.8444 597.731 -123.711 447.036 120.55 518.56Z" fill="#FCDD06" />
          </g>
          <defs>
            <filter id="filter0_f_278_139" x="-634.69" y="0.122314" width="1434.78" height="1506.57" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
              <feGaussianBlur stdDeviation="250" result="effect1_foregroundBlur_278_139" />
            </filter>
          </defs>
        </svg>
      </div>
      <div className="absolute bottom-0 right-0 z-0 overflow-hidden">
        <svg width="844" height="970" viewBox="0 0 844 970" fill="none" xmlns="http://www.w3.org/2000/svg" className='opacity-30'>
          <g filter="url(#filter0_f_278_138)">
            <path d="M755.55 518.56C885.409 556.585 963.619 708.451 925.346 839.155C887.073 969.86 672.545 1033.85 542.687 995.822C412.828 957.797 619.299 859.141 657.571 728.436C695.844 597.731 511.289 447.036 755.55 518.56Z" fill="#FCDD06" />
          </g>
          <defs>
            <filter id="filter0_f_278_138" x="0.30957" y="0.122314" width="1434.78" height="1506.57" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
              <feGaussianBlur stdDeviation="250" result="effect1_foregroundBlur_278_138" />
            </filter>
          </defs>
        </svg>
      </div>
      <div >
        <div className="flex flex-col lg:flex-row gap-10 mx-4 lg:mx-12 mb-8">
          <div className="lg:w-1/2 flex flex-col gap-5">
            <div className="text-blue-800 text-3xl lg:text-5xl font-extrabold text_shadow">ABOUT TURF</div>
            <div className="text-[#201F1F] text-lg lg:text-xl bg-[#FCDD06] bg-opacity-60 h-auto rounded-xl p-4">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.


            </div>
            <button className="bg-[#FCDD06] bg-opacity-60 w-full md:w-fit rounded-xl">
              <div className="text-center px-8 py-2 text-[#201F1F] text-lg lg:text-xl">Location</div>
            </button>
          </div>
          <div className="lg:w-1/2 flex flex-col gap-5 items-center">
            <div className="text-blue-800 text-3xl lg:text-5xl font-extrabold text-center text_shadow">PHOTOS</div>
            <div className="w-full h-[200px] lg:w-[70%] lg:h-[70%] relative group bg-[#FCDD06] rounded-2xl p-1 shadow-md shadow_box ">
              <div
                style={{ backgroundImage: `url(${data.turf.photos[currentIndex]})` }}
                className="w-full h-full rounded-2xl bg-center bg-cover duration-500"
              ></div>
              {/* Left Arrow */}
              <div className="absolute top-[50%] -translate-x-0 translate-y-[-50%] left-1 lg:left-[-3rem] cursor-pointer">
                <button onClick={prevSlide}>
                  <img src={LEFT} alt="right icon" className="w-1/3 lg:w-2/3" />
                </button>
              </div>
              {/* Right Arrow */}
              <div className="absolute top-[50%] translate-x-8 translate-y-[-50%] right-0 lg:right-[-1.8rem] cursor-pointer">
                <button onClick={nextSlide}>
                <img src={RIGHT} alt="right icon" className="w-1/3 lg:w-2/3" />
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <button className="flex items-center z-10 cursor-pointer  bg-[#FCDD06] w-fit rounded-[100px] scale-btn" onClick={() => setShowModal(true)}>
              <div className="mx-auto text-center px-8 py-2 text-black text-xl lg:text-3xl font-medium " >BOOK NOW</div>
          </button>
        </div>
      </div>

      <div className='bg-black bg-opacity-70 absolute bottom-8 right-0 p-2 rounded-md fixed'>
        <div className='flex flex-col gap-3 '>
          <img src={instagram} alt="instagram" className='w-[15px] lg:w-[30px]' />
          <img src={linkedin} alt="linkedin" className='w-[15px] lg:w-[30px]' />
          <img src={facebook} alt='facebook' className='w-[15px] lg:w-[30px]' />
        </div>
      </div>
      {showModal ? (
        <>
          <div className="justify-center items-center fixed inset-0 z-50 outline-none focus:outline-none">
            <Booking handleShowModal={handleShowModal} turf={name}/>
          </div>
          <div className="opacity-90 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </div>
  );
};

export default About