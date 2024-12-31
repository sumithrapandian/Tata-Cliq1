import React from 'react'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { useContext } from 'react';
import { Context } from '../../../Homepage';

const Brands = () => {
const {setPageStatus,setDisplayPageStatus, displayBrandPage, setDisplayBrandPage} = useContext(Context);

const handleBrandStatus = (event)=>{
 
  setPageStatus((prev) =>({
    ...prev,[event.target.innerText]:true
  }));
  setDisplayBrandPage(true)
  setDisplayPageStatus(false)
  
}


  return (   
    <>
    <div className="category_parent">
      <span onMouseOver={handleBrandStatus} >Brands</span>
   <ArrowDropDownIcon/>

  
    </div>
   
    </>
  )
}

export default Brands