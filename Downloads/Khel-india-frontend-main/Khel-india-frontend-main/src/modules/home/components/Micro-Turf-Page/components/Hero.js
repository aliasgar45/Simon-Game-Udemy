
import { Link } from 'react-router-dom';

import React, { useEffect, useRef, useState } from 'react';
import heroImg from '../../../../../shared/assets/img/background.png'
import polygon from '../../../../../shared/assets/img/polygon.svg'
import soccer from '../../../../../shared/assets/img/soccer-ball.svg'
import cricket from '../../../../../shared/assets/img/cricket_icon.svg'
import restroom from '../../../../../shared/assets/img/restroom.svg'
import parking from '../../../../../shared/assets/img/parking.svg'
import clothes from '../../../../../shared/assets/img/clothes.svg'
import downarrow from '../../../../../shared/assets/img/ps-down.png'
import { FaBars, FaTimes } from 'react-icons/fa';
import Booking from './booking';


const Hero = ({ data }) => {


    const [showModal, setShowModal] = React.useState(false);
    const handleShowModal = () => {
        setShowModal(false);
    };

    if(!data) return <>Loading...</>
    return (
        <div className="relative h-[96vh] overflow-hidden bg-red-500 lg:h-[100vh]">
            <img src={heroImg} className="absolute object-cover w-full h-full" />
            <img src={polygon} className="hidden lg:block absolute top-0 right-0 object-cover w-[55vw]  h-screen overflow-hidden z-10" />
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="absolute inset-0 bg-[#FCDD06] opacity-[12%]"></div>
            <div className='hidden lg:block absolute left-0 bottom-0 ml-12 cursor-pointer z-30'>
                <Link href={"#about"}>
                    <img className='w-14 h-auto bounce-image relative' src={downarrow} alt="down-arrow" />
                    {/* <span className='relative top-[-32px] left-[-10px] text-[#fcdb06e4] text-sm'>scroll down</span> */}
                </Link>
            </div>

            <div className=" relative z-10 flex justify-between py-28 mx-auto">
                <div className="relative z-10 flex flex-col justify-center gap-4 items-center px-1 mx-auto lg:mx-0 lg:w-4/5   xl:w-3/6"  >
                    <div className="text-5xl font-bold leading-tight text-[#FCDD06] uppercase title italic text-center sm:text-6xl" style={{ lineHeight: "1" }}>{data.turf.name}</div>
                    <div className=" text-white px-3 font-medium text-center lg:px-12">Address:- {data.turf.address}</div>
                    <button className="bg-[#FCDD06] w-fit rounded-[100px] scale-btn" onClick={() => setShowModal(true)}>
                        <div className="px-8 py-2 text-black text-xl lg:text-3xl font-medium " >BOOK NOW</div>
                    </button>
                </div>

                <div className='hidden lg:block relative top-8 right-0 z-20 text-black'>
                    <div className="bg-[#FCDD06] w-[600px] text-center right-title">
                        <div className=" text-black text-opacity-75 text-3xl px-10 py-4 font-bold">AVAILABLE SPORTS</div>
                    </div>
                    <div className='flex gap-8 mx-auto w-max p-4 '>
                        {data.games.map((sport, index) => (
                            <>
                                {sport === 'FootBall' && (
                                    <>
                                        <div className='text-center w-max'>
                                            <img src={soccer} alt="Football" className='w-[80px] h-auto mx-auto' />
                                            <div>Football</div>
                                        </div>
                                        {index !== data.games.length - 1 && (
                                            <div className='h-16 w-[2px] mt-1 bg-[#00000080]  border-0 rounded' />
                                        )}
                                    </>
                                )}
                                {sport === 'Box cricket' && (
                                    <>
                                        <div className='text-center w-max'>
                                            <img src={cricket} alt="Box Cricket" className='w-[80px] h-auto mx-auto' />
                                            <div>Box Cricket</div>
                                        </div>
                                        {index !== data.games.length - 1 && (
                                            <div className='h-16 w-[2px] mt-1 bg-[#00000080]  border-0 rounded' />
                                        )}
                                    </>
                                )}
                            </>
                        ))}
                    </div>

                    <div className="bg-[#FCDD06] w-[600px] text-center right-title">
                        <div className=" text-black text-opacity-75 text-3xl px-10 py-4 font-bold uppercase">amenities</div>
                    </div>
                    <div className='flex gap-8 mx-auto w-fit p-4 text-center'>
                        {data && data?.turf.amenities.map((amenity, index) => (
                            <>
                                {amenity === 'Rest Room' && (
                                    <>
                                        <div>
                                            <img src={restroom} alt="Rest Room" className='w-[80px] h-auto mx-auto' />
                                            <div>Rest Room</div>
                                        </div>
                                        {index !== (data.turf.amenities).length - 1 && (
                                            <div className='h-16 w-[2px] mt-1 bg-[#00000080]  border-0 rounded' />
                                        )}
                                    </>
                                )}
                                {amenity === 'Parking' && (
                                    <>
                                        <div>
                                            <img src={parking} alt="Parking" className='w-[35px] h-auto mx-auto' />
                                            <div className='text-neutral-950 font-normal'>Parking</div>
                                        </div>
                                        {index !== (data.turf.amenities).length - 1 && (
                                            <div className='h-16 w-[2px] mt-1 bg-[#00000080]  border-0 rounded' />
                                        )}
                                    </>
                                )}
                                {amenity === 'Changing Room' && (
                                    <>
                                        <div>
                                            <img src={clothes} alt="Changing Room" className='w-[80px] h-auto mx-auto' />
                                            <div>Changing Room</div>
                                        </div>
                                        {index !== (data.turf.amenities).length - 1 && (
                                            <div className='h-16 w-[2px] mt-1 bg-[#00000080]  border-0 rounded' />
                                        )}
                                    </>
                                )}
                            </>
                        ))}
                    </div>
                </div>
            </div>

            <div className='relative left-0 bottom-24 w-full h-[500px] bg-white tilt_quad block lg:hidden'>
                <div className='relative top-24 right-0 float-right w-fit z-20 text-black lg:hidden'>
                    <div className="bg-[#FCDD06] w-[320px] text-center right-title-mob">
                        <div className=" text-black text-opacity-75 text-2xl px-10 py-3 font-bold">Available Sports</div>
                    </div>
                    <div className='flex gap-8 justify-center mx-auto p-4 '>
                        {data.games.map((sport, index) => (
                            <>
                                {sport === 'FootBall' && (
                                    <>
                                        <div className='text-center w-max'>
                                            <img src={soccer} alt="Football" className='w-[40px] h-auto mx-auto' />
                                            <div className='mt-1'>Football</div>
                                        </div>
                                        {index !== data.games.length - 1 && (
                                            <div className='h-16 w-[2px] mt-1 bg-[#00000080]  border-0 rounded' />
                                        )}
                                    </>
                                )}
                                {sport === 'Box cricket' && (
                                    <>
                                        <div className='text-center w-max'>
                                            <img src={cricket} alt="Box Cricket" className='w-[40px] h-auto mx-auto' />
                                            <div className='mt-1'>Box Cricket</div>
                                        </div>
                                        {index !== data.games.length - 1 && (
                                            <div className='h-16 w-[2px] mt-1 bg-[#00000080]  border-0 rounded' />
                                        )}
                                    </>
                                )}
                            </>
                        ))}
                    </div>
                </div>

                <div className='relative top-24 left-0 float-left w-fit z-20 text-black lg:hidden'>
                    <div className="bg-[#FCDD06] w-[320px] text-center left-title">
                        <div className=" text-black text-opacity-75 text-2xl px-10 py-3 font-bold">Amenities</div>
                    </div>
                    <div className='flex gap-8 mx-auto w-fit p-4 text-center' style={{ lineHeight: "1" }}>
                        {data.turf.amenities.map((amenity, index) => (
                            <>
                                {amenity === 'Rest Room' && (
                                    <>
                                        <div>
                                            <img src={restroom} alt="Rest Room" className='w-[40px] h-auto mx-auto' />
                                            <div className='mt-2'>Rest Room</div>
                                        </div>
                                        {index !== (data.turf.amenities).length - 1 && (
                                            <div className='h-16 w-[2px] mt-1 bg-[#00000080]  border-0 rounded' />
                                        )}
                                    </>
                                )}
                                {amenity === 'Parking' && (
                                    <>
                                        <div>
                                            <img src={parking} alt="Parking" className='w-[18px] h-auto mx-auto' />
                                            <div className='text-neutral-950 font-normal mt-2'>Parking</div>
                                        </div>
                                        {index !== (data.turf.amenities).length - 1 && (
                                            <div className='h-16 w-[2px] mt-1 bg-[#00000080]  border-0 rounded' />
                                        )}
                                    </>
                                )}
                                {amenity === 'Changing Room' && (
                                    <>
                                        <div>
                                            <img src={clothes} alt="Changing Room" className='w-[40px] h-auto mx-auto' />
                                            <div className='mt-2'>Changing Room</div>
                                        </div>
                                        {index !== (data.turf.amenities).length - 1 && (
                                            <div className='h-16 w-[2px] mt-1 bg-[#00000080]  border-0 rounded' />
                                        )}
                                    </>
                                )}
                            </>
                        ))}
                    </div>
                </div>
            </div>
            {showModal ? (
                <>
                    <div className="justify-center items-center fixed inset-0 z-50 outline-none focus:outline-none">
                        <Booking handleShowModal={handleShowModal} turf={data.turf.name} />
                    </div>
                    <div className="opacity-90 fixed inset-0 z-40 bg-black"></div>
                </>
            ) : null}
        </div>
    )
}

export default Hero