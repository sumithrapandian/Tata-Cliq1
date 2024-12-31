import React, { useState } from 'react';
import {  sliderImg6 } from '../titlefolder/data'; 
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import './Gadjetden.css';
import { Link } from 'react-router-dom';

function Gadjetden() {
  const [index13, setIndex13] = useState(0);
  const [index14, setIndex14] = useState(4);

  const handleLeft = () => {
    if (index13 > 0) {
      setIndex13(index13 - 1);
      setIndex14(index14 - 1);
    } else {
      setIndex13(sliderImg6.length - 4);
      setIndex14(sliderImg6.length);
    }
  };

  const handleRight = () => {
    if (index14 >= sliderImg6.length) {
      setIndex13(0);
      setIndex14(4);
    } else {
      setIndex13(index13 + 1);
      setIndex14(index14 + 1);
    }
  };

  return (     
    <>
      <div className="parent_line7">
        <div className="line7"></div> 
      </div>

      <div className="parent_slick7">
        <div className="sub_slick7">
          <ArrowBackIosIcon onClick={handleLeft} className="previous7" />
          <ArrowForwardIosIcon onClick={handleRight} className="next7" />
        </div>

        <div className="child_slick7">
          {sliderImg6.slice(index13, index14).map((item) => (
            <div className="create7" key={item.id}>  
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

export default Gadjetden;
