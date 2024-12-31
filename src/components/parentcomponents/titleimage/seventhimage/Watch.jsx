import React, { useState } from 'react';
import { sliderImg7 } from '../titlefolder/data'; 
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import './Watch.css';
import { Link } from 'react-router-dom';

function Watch() {
  const [index15, setIndex15] = useState(0);
  const [index16, setIndex16] = useState(4);

  const handleLeft = () => {
    if (index15 > 0) {
      setIndex15(index15 - 1);
      setIndex16(index16 - 1);
    } else {
      setIndex15(sliderImg7.length - 4);
      setIndex16(sliderImg7.length);
    }
  };

  const handleRight = () => {
    if (index16 >= sliderImg7.length) {
      setIndex15(0);
      setIndex16(4);
    } else {
      setIndex15(index15 + 1);
      setIndex16(index16 + 1);
    }
  };

  return (     
    <>
      <div className="parent_line8">
        <div className="line8"></div> 
      </div>

      <div className="parent_slick8">
        <div className="sub_slick8">
          <ArrowBackIosIcon onClick={handleLeft} className="previous8" />
          <ArrowForwardIosIcon onClick={handleRight} className="next8" />
        </div>

        <div className="child_slick8">
          {sliderImg7.slice(index15, index16).map((item) => (
            <div className="create8" key={item.id}>  
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

export default Watch;
