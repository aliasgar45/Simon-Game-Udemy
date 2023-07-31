import { useContext } from "react";
import { BookingContext } from "../../Contex/BookingContext";
const PersonalInfo=()=>{
    const {setName,setPhone} = useContext(BookingContext);
    return <>
        <label>Enter Name</label>
        <input onChange={(e)=>setName(e.target.value)}></input>
        <br/>
        <label>Enter Phone No.</label>
        <input onChange={(e)=>setPhone(e.target.value)}></input>
    
    </>

}
export default PersonalInfo