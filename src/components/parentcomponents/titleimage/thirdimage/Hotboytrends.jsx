import React, { useState } from 'react';
import { sliderImg3 } from '../titlefolder/data'; 
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import './Hotboytrends.css';
import { Link } from 'react-router-dom';

function Hotboytrends() {
  const [index7, setIndex7] = useState(0);
  const [index8, setIndex8] = useState(4);
  const handleLeft = () => {
    if (index7 > 0) {
      setIndex7(index7 - 1);
      setIndex8(index8 - 1);
    } else {
      setIndex7(sliderImg3.length - 4);  
      setIndex8(sliderImg3.length);  
    }
  };


  const handleRight = () => {
    if (index8 < sliderImg3.length) {
      setIndex7(index7 + 1);
      setIndex8(index8 + 1);
    } else {
      setIndex7(0);  
      setIndex8(4);  
    }
  };

  return (     
    <>
      <div className="parent_line4">
        <div className="line4"></div>  {/* Make sure the class is consistent */}
      </div>
      <div className="parent_slick4">
        <div className="sub_slick4">
          <ArrowBackIosIcon onClick={handleLeft} className="previous4" />
          <ArrowForwardIosIcon onClick={handleRight} className="next4" />
        </div>

        <div className="child_slick4">
          {sliderImg3.slice(index7, index8).map((item) => (
            <div className="create4" key={item.id}>  
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

export default Hotboytrends;
