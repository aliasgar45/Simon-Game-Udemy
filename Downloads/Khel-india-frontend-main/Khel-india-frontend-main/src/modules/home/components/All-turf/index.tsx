import React,{useState,useEffect} from 'react'
import { Link } from 'react-router-dom'
import './global.css'

export const BASE_URL='https://api.dev.khelindia.co.in';
export async function getStaticProps() {
  const res = await fetch(`${BASE_URL}/v1/turf/all`)
  const data = await res.json()
  console.log(data)
  return {
    props: {
      data: data,
    },
  }
}


const AllTurfPage = () => {
    console.log("loading")
    const [data,setdata]=useState<any[]|null>(null);
    useEffect(()=>{
      const getData=async()=>{
        const d=await getStaticProps();
        console.log(d);
        setdata(d.props.data);
      }
      getData()
    },[])
  return (
      <div>
        <h1 className='text-center text-3xl bg-red-500'>Turfs</h1>
        {data && data?.map((ele) => {
          return <div key={ele.id}>
            <Link to={`/viewTurf/${ele.name}/${ele.id}`}>
              <h1 className='text-center text-3xl bg-blue-500 w-[200px] m-6 flex mx-auto p-3'>
                {ele.name}
              </h1>
            </Link>
          </div>
        })
        }
      </div>
  )
}


export default AllTurfPage