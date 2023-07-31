import React from 'react'
import {useContext } from 'react'
// import Image from 'next/image'
import refreeIcon from '../../../../../../shared/assets/img/mdi-whistle-outline.svg'
import streaming from '../../../../../../shared/assets/img/ic-round-live-tv.svg'
import { BookingContext } from '../../Contex/BookingContext'

const Services = () => {
  
  const {selectedServices, handleServiceSelection} = useContext(BookingContext);

  return (
    <div className='flex flex-col mt-12 gap-4'>
    <div className='grid grid-cols-10 w-[360px]'>
      <div className='col-span-2 w-[70%] h-auto'>
        <img src={refreeIcon} alt="referee" className='h-auto' height="auto" />
      </div>
      <div className='text-[#FCDD06] text-2xl font-medium col-span-7 flex items-center'>Referee</div>
      <div className='h-auto m-auto'>
        <label htmlFor="myCheckbox04" className="checkbox">
          <input
            className="checkbox__input"
            type="checkbox"
            id="myCheckbox04"
            checked={selectedServices.includes('Referee')}
            onChange={() => handleServiceSelection('Referee')}
          />
          <svg className="checkbox__icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22">
            <rect width="21" height="21" x=".5" y=".5" fill="#FFF" fillOpacity="0" stroke="#fff" rx="3" />
            <path className="tick" stroke="#fff" fill="none" strokeLinecap="round" strokeWidth="2" d="M4 10l5 5 9-9" />
          </svg>
        </label>
      </div>
    </div>
    <div className='grid grid-cols-10 w-[360px]'>
      <div className='col-span-2 w-[70%] h-auto'>
        <img src={streaming} alt="referee" className='h-auto' height="auto" />
      </div>
      <div className='text-[#FCDD06] text-2xl font-medium col-span-7 flex items-center'>Live streaming</div>
      <div className='h-auto m-auto'>
        <label htmlFor="myCheckbox05" className="checkbox">
          <input
            className="checkbox__input"
            type="checkbox"
            id="myCheckbox05"
            checked={selectedServices.includes('Live streaming')}
            onChange={() => handleServiceSelection('Live streaming')}
          />
          <svg className="checkbox__icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22">
            <rect width="21" height="21" x=".5" y=".5" fill="#FFF" fillOpacity="0" stroke="#fff" rx="3" />
            <path className="tick" stroke="#fff" fill="none" strokeLinecap="round" strokeWidth="2" d="M4 10l5 5 9-9" />
          </svg>
        </label>
      </div>
    </div>
  </div>  
  )
}

export default Services