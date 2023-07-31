import React, {useState, useContext} from 'react'
import { BookingContext } from '../../Contex/BookingContext';

const Sports = () => {
  const {handleSportClick, selectedSport} = useContext(BookingContext);
  return (
    <div className="flex flex-col pt-12 gap-8 justify-center w-full">
      <div
        className={`w-72 h-11 rounded-lg uppercase flex cursor-pointer justify-center items-center transition-all ${
          selectedSport === 'Cricket' ? 'bg-[#FCDD06]' : 'border-4 border-[#FCDD06] text-[#FCDD06]'
        }`}
        onClick={() => handleSportClick('Cricket')}
      >
        Cricket
      </div>
      <div
        className={`w-72 h-11 rounded-lg uppercase flex cursor-pointer justify-center items-center transition-all ${
          selectedSport === 'Football' ? 'bg-[#FCDD06]' : 'border-4 border-[#FCDD06] text-[#FCDD06]'
        }`}
        onClick={() => handleSportClick('Football')}
      >
        Football
      </div>
    </div>
  );
};



export default Sports