import React, { useState } from 'react';
import { sliderImg1 } from '../titlefolder/data'; 
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import './Websitestores.css';
import { Link } from 'react-router-dom';

function Websitestores() {
  const [index3, setIndex3] = useState(0);
  const [index4, setIndex4] = useState(4);

 
  const handleLeft = () => {
    if (index3 > 0) {
      setIndex3(index3 - 1);
      setIndex4(index4 - 1);
    } else {
      setIndex3(sliderImg1.length - 4);  
      setIndex4(sliderImg1.length);  
    }
  };


  const handleRight = () => {
    if (index4 < sliderImg1.length) {
      setIndex3(index3 + 1);
      setIndex4(index4 + 1);
    } else {
      setIndex3(0);  
      setIndex4(4);  
    }
  };
 

  return (
    <>
      <div className="parent_line2">
        <div className="line2"></div>
      </div>
      <div className="parent_slick2">
        <div className="sub_slick2">
          <ArrowBackIosIcon onClick={handleLeft} className="previous2"/>
          <ArrowForwardIosIcon onClick={handleRight} className="next2" />
        </div>

        <div className="child_slick2">
          {sliderImg1.slice(index3, index4).map((item) => (
            <div className="create2" key={item.id}>  
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

export default Websitestores;
