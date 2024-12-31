import React, { useContext } from 'react';
import "./categoriehover.css";

import { womensfashion } from '../../titleimage/titlefolder/data';
import { useState } from 'react';
import { Context } from '../../../Homepage';
const Categoriehover = () => {
 const {displayPageStatus, setDisplayPageStatus, setPageStatus} = useContext(Context);
 const handleCategoryStatusNone = (event)=>{
  // setCategoryStatus(false);
  setPageStatus((prev) =>({
    ...prev,[event.target.innerText]:false
  }));
  setDisplayPageStatus(false);
}
  return (
    <> 

    {displayPageStatus && 
    
    (
      <div onMouseOut={handleCategoryStatusNone}
        className="hover_container" >
        <div className="child_container">
         
          {womensfashion.map((item, index) => (
            <div className='super_parent' key={index}>
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
    )
    }
  

     
    </>
  );
}

export default Categoriehover;
