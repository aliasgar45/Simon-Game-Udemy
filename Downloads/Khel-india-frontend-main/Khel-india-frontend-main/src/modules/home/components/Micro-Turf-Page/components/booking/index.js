import React, { useState, useEffect } from 'react'
// import Image from 'next/image';
import Calender from './calender'
import Sports from './sports';
import TimeSlot from './time';
import Services from './services';
import nextIcon from '../../../../../../shared/assets/img/next.svg'
import prevIcon from '../../../../../../shared/assets/img/previous.svg'
import dayjs from 'dayjs'; 
import { BookingContext } from '../../Contex/BookingContext';
import PersonalInfo from './personalIngo';
import { BASE_URL } from '../../../All-turf';

const Booking = ({handleShowModal,turf}) => {
  const [page, setPage] = useState(0);
  const FormTitles = ["Select Date", "Choose Sports","Time Slot",  "Additional Services","PersonalInfo"]



  // calendar
  const [date, setDate] = useState(dayjs());
  const [selectedDay, setSelectedDay] = useState(null);
  const [selectedMonth, setSelectedMonth] = useState(null);
  const [slot ,setSlot]=useState("");
  const [name,setName]=useState("");
  const [phone,setPhone]=useState("");
  const handleDateChange = (date) =>{
    setDate(date);
  }
  React.useEffect(() => {
    setSelectedDay(date.date());
    setSelectedMonth(date.month() + 1);
    console.log("selected date is " + date.date());
  }, [date]);

 
      // sports selection
    const [selectedSport, setSelectedSport] = React.useState(null);
    const handleSportClick = (sport) => {
      
      setSelectedSport(sport);
      // console.log("sport is selected")
    };

     // Sports Services
 const [selectedServices, setSelectedServices] = useState([]);

 const handleServiceSelection = (serviceName) => {
   // Check if the service is already selected
   if (selectedServices.includes(serviceName)) {
     // If selected, remove it from the selectedServices array
     setSelectedServices(selectedServices.filter((service) => service !== serviceName));
   } else {
     // If not selected, add it to the selectedServices array
     setSelectedServices([...selectedServices, serviceName]);
   }
 };
const submitHandle=async()=>{
  // console.log("inside submit handle\n",date,selectedSport,selectedMonth,selectedDay,selectedServices,name,phone);
  // console.log(date.format('DD/MM/YYYY'));
  const requestObj={
    name:name,
    phone:phone,
    referee:selectedServices.includes('Referee'),
    liveStreaming:selectedServices.includes('Live streaming'),
    date:date.format('DD/MM/YYYY'),
    slot:slot,
    sport:selectedSport,
    turf:turf  
    
  }
  console.log(requestObj);
  const response=await fetch(`${BASE_URL}/v1/booking`,{
    method:'POST',
    headers:{
      "Content-Type":"application/json"
  },
    body:JSON.stringify(requestObj),
    
  })
  const whatsApp=await response.json();
  console.log(whatsApp);
  window.open(whatsApp,'_blank')
  handleShowModal(false);

 }

 useEffect(() => {
  console.log(selectedServices)  
}, [selectedServices])

  const pageDisplay = (page) => {
    if (page == 0) return <Calender date={date} handleDateChange={handleDateChange}/>;
    else if (page == 1) return <Sports handleSportClick={handleSportClick} selectedSport={selectedSport}/>;  
    else if (page == 2) return <TimeSlot setSlot={setSlot}/>;
    else if (page == 3) return <Services /> ;
    else if(page==4) return <PersonalInfo setNam={setName} setPhone={setPhone}/>
  }

  return (
    <BookingContext.Provider value={{selectedServices,handleServiceSelection, date , handleDateChange, selectedSport, handleSportClick,setName,setPhone}}>

    <div className='h-screen p-2 mx-auto flex justify-center items-center'>
      <div className='w-[800px] h-[550px] bg-[#1048B0] bg-opacity-[25%] rounded-xl overflow-hidden shadow-lg mx-auto flex flex-col items-center gap-5 p-3 relative' style={{"backdrop-filter": 'blur(12.5px)',}}>
        <div className='header'>
          <h1 className='text-white text-2xl  font-semibold'>{FormTitles[page]}</h1>
        </div>
        <div className='body h-full'>{pageDisplay(page)}</div>

        <div className='footer flex flex-row justify-between w-[100%] relative'>
          <button className='bg-[#FCDD06] text-black text-xl py-2 px-12 rounded ml-4 md:mx-auto' 
          
          onClick={() => {
            if (page==2 && selectedSport === null) {
              alert("Please select any sport before proceeding.");
            }else if(page==4){
                submitHandle();
                
            } 
            else {
              setPage((currPage) => currPage + 1);
            }
          }}>
          {(page == 4) ? "Book Now" : "Proceed"}
          </button>

          <div className='flex flex-row w-max absolute pr-8 right-0 bottom-3 text-white text-sm'>
            <button  disabled={page == 0} 
            onClick={() => { setPage((currPage) => currPage - 1) }}> <img className='w-[60%]' src={prevIcon} alt= "prev-icon"/> </button>
            <div>{page+1}/5 </div>
            <button className='pl-2' disabled={page == FormTitles.length - 1} onClick={() => { setPage((currPage) => currPage + 1) }}> 
            <img className='w-[60%]' src={nextIcon} alt= "next-icon"/>  </button>
          </div>
        </div>
        <button onClick={handleShowModal} >
          <div className='text-black text-2xl h-10 w-10 rounded-full bg-[#FCDD06] flex justify-center items-center absolute z-51 top-0 right-0'>X</div>
        </button>

      </div>
    </div>
    </BookingContext.Provider>

  )
}

export default Booking