import React, { useState } from 'react';
import { sliderImg9 } from '../titlefolder/data'; 
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import './Shine.css';
import { Link } from 'react-router-dom';

function Shine() {
  const [index19, setIndex19] = useState(0);
  const [index20, setIndex20] = useState(4);

  const handleLeft = () => {
    if (index19 === 0) {
      setIndex19(sliderImg9.length - 4); // Go to the last set of images
      setIndex20(sliderImg9.length);     // Ensure you stay within bounds
    } else {
      setIndex19(index19 - 1);
      setIndex20(index20 - 1);
    }
  };
  
  const handleRight = () => {
    if (index20 >= sliderImg9.length) {
      setIndex19(0); 
      setIndex20(4);
    } else {
      setIndex19(index19 + 1);
      setIndex20(index20 + 1);
    }
  };
  

  return (     
    <>
      <div className="parent_line10">
        <div className="line10"></div> 
      </div>

      <div className="parent_slick10">
        <div className="sub_slick10">
          <ArrowBackIosIcon onClick={handleLeft} className="previous10" />
          <ArrowForwardIosIcon onClick={handleRight} className="next10" />
        </div>

        <div className="child_slick10">
          {sliderImg9.slice(index19, index20).map((item) => (
            <div className="create10" key={item.id}>  
              <Link to={`/${item.name}`}>
                <img src={item.src} alt="slider" height={340} width={250} />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Shine;
