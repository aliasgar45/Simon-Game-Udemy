import {useEffect, useRef} from "react";
import Card from "../../ui/Card";
import "./Hero.css";
import "./Timer.css";

export default function AvalonHero({ heroImg }) {
  const dayref=useRef();
  const hourref=useRef();
  const minref=useRef();
  const secref=useRef();

  let interval;

  const countdown=()=>{
    const countDate=new Date("March 17,2023 00:00:00").getTime();
    interval=setInterval(()=>{
    const now = new Date().getTime();
    const gap= countDate - now;
    const sec=1000;
    const min = sec * 60;  
    const hour = min * 60 ;
    const day = hour * 24;

    const textDay= Math.floor(gap/day).toString();
    const textHour= Math.floor((gap % day)/hour).toString();
    const textMin= Math.floor((gap % hour)/min).toString();
    const textSec= Math.floor((gap % min)/sec).toString();

    if (gap < 0) {
      clearInterval(interval);
    }
      
    dayref.current.innerText=textDay.length==1?"0"+textDay:textDay;
    hourref.current.innerText=textHour.length==1?"0"+textHour:textHour;
    minref.current.innerText=textMin.length==1?"0"+textMin:textMin;
    secref.current.innerText=textSec.length==1?"0"+textSec:textSec;

    },1000)
  }

  useEffect(()=>{
    countdown();
  },[countdown]);


  return (
    <Card>
      <div className="h_container" id="home">
        <div className="hero_container">
          <img src={heroImg} alt="" />
          <div className="countdown">
            <div className="container-day">
              <h3 className="day" ref={dayref}>03</h3>
              <h3>Day</h3>
            </div>
            <div className="container-hour">
              <h3 className="hour" ref={hourref}>03</h3>
              <h3>Hour</h3>
            </div>
            <div className="container-min">
              <h3 className="min" ref={minref}>22</h3>
              <h3>Minute</h3>
            </div>
            <div className="container-sec">
              <h3 className="sec" ref={secref}>56</h3>
              <h3>Second</h3>
            </div>
          
          </div>
          <div className="mssg">Time till Hackathon</div>
        </div>
      </div>
    </Card>
  );
}
