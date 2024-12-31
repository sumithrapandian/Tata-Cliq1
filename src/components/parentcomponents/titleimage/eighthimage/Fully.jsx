import React, { useState } from 'react';
import { sliderImg8 } from '../titlefolder/data'; 
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import './Fully.css';
import { Link } from 'react-router-dom';

function Fully() {
  const [index17, setIndex17] = useState(0);
  const [index18, setIndex18] = useState(4);

  const handleLeft = () => {
    if (index17 === 0) {
      setIndex17(sliderImg8.length - 4); // Go to the last set of images
      setIndex18(sliderImg8.length);     // Ensure you stay within bounds
    } else {
      setIndex17(index17 - 1);
      setIndex18(index18 - 1);
    }
  };
  
  const handleRight = () => {
    if (index18 >= sliderImg8.length) {
      setIndex17(0); 
      setIndex18(4);
    } else {
      setIndex17(index17 + 1);
      setIndex18(index18 + 1);
    }
  };
  

  return (     
    <>
      <div className="parent_line9">
        <div className="line9"></div> 
      </div>

      <div className="parent_slick9">
        <div className="sub_slick9">
          <ArrowBackIosIcon onClick={handleLeft} className="previous9" />
          <ArrowForwardIosIcon onClick={handleRight} className="next9" />
        </div>

        <div className="child_slick9">
          {sliderImg8.slice(index17, index18).map((item) => (
            <div className="create9" key={item.id}>  
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

export default Fully;
