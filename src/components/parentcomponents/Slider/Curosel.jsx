import React, { useState,useEffect } from 'react';
import data from './imagejson/image.json'; 
import "./Curosel.css";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from  '@mui/icons-material/ArrowForwardIos';
const Curosel = () => {
  const[value,setvalue]=useState(0);
  const [Message,setMessage]=useState('');
  const handleprev =()=>{
    setvalue(value-1)
    if(value==0){
      setvalue(data.length-1)
    }
  }
  const handlenext=()=>{
    setvalue(value+1) 
    if(value==data.length-1)
    {
      setvalue(0)
    }
  }
    
  console.log(data);
  useEffect(() => {
    const timer = setTimeout(() => {
      if(value===data.length-1){
        setvalue(0)
      }
      setvalue(prev =>prev+1)
    }, 3000); 

    return () => clearTimeout(timer);
  }, [value]);
  return (     
    <>
      <div className="curoselcontainer">  
        <div className="rowcurosel">
          <img src={data[value].src} alt="" className='slidercontainer'  />
        </div>
          
        <ArrowBackIosIcon onClick={handleprev}  className='arrow arrow-left' /> 
      <ArrowForwardIosIcon onClick={handlenext}  className='arrow arrow-right' />
        
      </div>
      <div className="imageslide">
        
        {data.map((item,index)=>{

           <p key={index}>{item.src}</p>
        })}
      </div>
      <div className="parentslide">
       {data.forEach((item)=>{
         console.log(item)
       })}
      </div>
    </>    
  );   
};

export default Curosel;
