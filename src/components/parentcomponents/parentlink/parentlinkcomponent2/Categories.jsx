import React from 'react'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { useContext } from 'react';
import { Context } from '../../../Homepage';
const Categories = () => {
const { setPageStatus,setDisplayBrandPage, setDisplayPageStatus} = useContext(Context);
  

const handleCategoryStatus = (event)=>{
  // setCategoryStatus(true);
setPageStatus((prev) =>({
  ...prev,[event.target.innerText]:true
}));

setDisplayPageStatus(true);

setDisplayBrandPage(false);

}


  return (
    <>
    <div className="category_parent">
      <span onMouseOver={handleCategoryStatus} >Category</span>
   <ArrowDropDownIcon/>

  
    </div>
         
    </>
  )
}

export default Categories