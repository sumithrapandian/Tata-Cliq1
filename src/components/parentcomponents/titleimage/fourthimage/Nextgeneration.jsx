import React, { useState } from 'react';
import { sliderImg4 } from '../titlefolder/data'; 
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import './Nextgeneration.css';
import { Link } from 'react-router-dom';

function Nextgeneration() {
  const [index9, setIndex9] = useState(0);
  const [index10, setIndex10] = useState(4);

  const handleLeft = () => {
    if (index9 > 0) {
      setIndex9(index9 - 1);
      setIndex10(index10 - 1);
    } else {
      setIndex9(sliderImg4.length - 4);  
      setIndex10(sliderImg4.length);  
    }
  };
  const handleRight = () => {
    if (index10 < sliderImg4.length) {
      setIndex9(index9 + 1);
      setIndex10(index10 + 1);
    } else {
      setIndex9(0);  
      setIndex10(4);  
    }
  };

  return (     
    <>
    <div className="parent_line5">
        
      </div>
      <div className="parent_line5">
        <div className="line5"></div> 
      </div>
      <div className="parent_slick5">
        <div className="sub_slick5">
          <ArrowBackIosIcon onClick={handleLeft} className="previous5" />
          <ArrowForwardIosIcon onClick={handleRight} className="next5" />
        </div>

        <div className="child_slick5">
          {sliderImg4.slice(index9, index10).map((item) => (
            <div className="create5" key={item.id}>  
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

export default Nextgeneration;
