import React,{useState,useEffect} from 'react'
import { useParams } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'


import About from './components/about'
import { BASE_URL } from '../All-turf'

export const getStaticPaths = async () => {
  const res = await fetch('https://khel-india-backend.vercel.app/turf/all')
  const data:any[] = await res.json()

  const paths = data.map((ele)=>{
    return {
      params: {
        turfID: ele.id.toString(),
      }
    }
  })
  
  return { 
    paths: paths, 
    fallback: false, 
  };
};
 
export const getStaticProps = async (id:any) => {
//   const id = context.params.turfID;
  const res = await fetch(`${BASE_URL}/v1/turf/findOne/${id}`)
  const data = await res.json()
  console.log(data);
  return { props: { data } }
}

const Turf = () => {
    const {id}=useParams();
    const [data,setdata]=useState<any|null>(null);
    useEffect(()=>{
        const getData=async()=>{
           const res=await getStaticProps(id);
            setdata(res.props.data);
        }
        getData();
        console.log(data);


    },[])
    if(!data) return <h1>Loading...</h1>
  return (
    <>
      <head>
      <meta name="viewport" content="user-scalable=no, width=device-width, initial-scale=1.0" />
        <meta name="apple-mobile-web-app-capable" content="yes" />

        <title>{data.turf.name} | Khel India</title>
      </head>
      <Navbar/>
      <Hero data={data}/> 
      <About data={data}/>
    </>
  )
} 

export default Turf;