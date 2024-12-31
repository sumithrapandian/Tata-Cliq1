import React, { useContext } from 'react';
import "./Brandhover.css";

import {Brands } from '../../titleimage/titlefolder/data';

import { Context } from '../../../Homepage';
const Brandhover = () => {
 const {setPageStatus,displayBrandPage, setDisplayBrandPage} = useContext(Context);
  const handleBrandStatusNone = (event)=>{
 
  
    setPageStatus((prev) =>({
      ...prev,[event.target.innerText]:false
    }));
    setDisplayBrandPage(false)
  }
  return (
    <>  

    {displayBrandPage &&  (
        <div  onMouseOut={handleBrandStatusNone}
          className="hover_brand" >
          <div className="child_brand">
           
            {Brands.map((item, index) => (
              <div className='super_brand' key={index}>
               <p>{item.Categoryname}</p>
                 <ul>
                 {item.types.map(item=>{     
                return  <li>{item}</li>   
                 })}
                 </ul>
                 
              </div>
            ))}
          </div>
        </div>
      )}
     
    </>
  );
}

export default Brandhover;
