import React, { useState } from 'react';
import { sliderImg } from '../titlefolder/data'; 
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import './Imageslick.css';
import { Link } from 'react-router-dom';

function Imageslick() {
  
  const [index1, setIndex1] = useState(0);
  const [index2, setIndex2] = useState(4); 
 
  const arrowHandleLeft = () => {
    if (index1 > 0) {
      setIndex1((prevIndex) => prevIndex - 1);
      setIndex2((prevIndex) => prevIndex - 1);
    }
    if (index1 === 0) {  
      setIndex1((prevIndex) => prevIndex + 1);
      setIndex2((prevIndex) => prevIndex + 1); 
    }
  };

  const arrowHandleRight = () => {
    if (index2 < sliderImg.length) {
      setIndex1((prevIndex) => prevIndex + 1);
      setIndex2((prevIndex) => prevIndex + 1);
    }
    if (index2 === sliderImg.length) {
      setIndex1(sliderImg.length -4);
      setIndex2(sliderImg.length);
    }
  };

  return (
    <>
    <div className="parent_line">
    <div className="line">
    </div>
      </div>
    <div className="parent_slick">
      
       <div className="sub_slick">
        <ArrowBackIosIcon onClick={arrowHandleLeft} className='previous'  />
        <ArrowForwardIosIcon onClick={arrowHandleRight} className='next' />
        </div>
      <div className="child_slick">
       
        {sliderImg.slice(index1, index2).map((item) => (
          <div className="create" > 
          <Link to={`/${item.name}`} key={item.id}>
            <img src={item.src} alt="slider" height={340} width={250} />
            </Link> 
          </div>    
        ))}
      </div>
    </div>
    </>
  );
}

export default Imageslick;
