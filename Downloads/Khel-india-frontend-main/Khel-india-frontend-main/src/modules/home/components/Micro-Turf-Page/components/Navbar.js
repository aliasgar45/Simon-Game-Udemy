import React from 'react'
// import Image from 'next/image'
import { Link } from 'react-router-dom';
import logo from '../../../../../shared/assets/img/logo.png'
import { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';


const Navbar = () => {
    
    const [navbar, setNavbar] = useState(false);

    const [changeBG, setBG] = useState(false)
    const changeBackground = () => {
        if (window.scrollY >= 66) {
            setBG(true)
        } else {
            setBG(false)
        }
      }
      useEffect(() => {
        changeBackground()
        window.addEventListener("scroll", changeBackground)
      })
    

    return (
        <div className= "sticky top-0 z-40 ">
        <header className={`absolute left-0 right-0 top-0 z-20  ${changeBG ? 'bg-[#EBCD00] shadow-md ' : 'bg-transparent'}`}>
        <nav className="container px-6 py-1 mx-auto md:px-12">
            <div className="sticky items-center justify-between md:flex">
                <div className="flex items-center justify-between">
                    <Link href="/">
                        <img src={logo} alt="logo" className="w-28 mr-2 fill-current" />
                    </Link>
                    <div className="md:hidden">
                        <button className="text-white focus:outline-none" onClick={() => setNavbar(!navbar)} >
                            {navbar ? (
                                <FaTimes className="w-12 h-12" />
                            ) : (
                                <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M4 6H20M4 12H20M4 18H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>
                <div className="items-center hidden md:flex">
                    <Link href="/" className="mx-3 text-[#1048B0] uppercase cursor-pointer  hover-underline-animation">
                        About us
                    </Link>
                    <Link href="/">
                        <span className="mx-3 text-[#1048B0] uppercase cursor-pointer  hover-underline-animation">
                            Calendar
                        </span>
                    </Link>
                    <Link href="/" >
                        <li className="mx-3 text-white uppercase cursor-pointer  bg-[#1048B0]  px-3 py-1  my-4 rounded-full flex gap-2 justify-center items-center scale-btn"> Contact us  </li>
                    </Link>
                </div>
                {/* Responsive navigation links */}
                <div className={` ${navbar ? 'block' : 'hidden'} md:hidden bg-[#FCDD06] flex flex-col min-w-max`}>
                    <Link href="/" className="mx-3 text-[#1048B0] uppercase cursor-pointer hover-underline-animation">
                        About us
                    </Link>
                    <Link href="/">
                        <span className="mx-3 text-[#1048B0] uppercase cursor-pointer hover-underline-animation">
                            Calendar
                        </span>
                    </Link>
                    <Link href="/">
                        <li className="mx-3 text-white uppercase cursor-pointer bg-[#1048B0] px-3 py-1 my-4 rounded-full flex gap-2 justify-center items-center scale-btn">
                            Contact us
                        </li>
                    </Link>
                </div>
            </div>
        </nav>
    </header>
    </div>
    )
}

export default Navbar