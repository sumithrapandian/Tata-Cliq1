import React, { useState } from 'react';
import { sliderImg5 } from '../titlefolder/data'; 
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import './Homechecklist.css';
import { Link } from 'react-router-dom';

function Homechecklist() {
  const [index11, setIndex11] = useState(0);
  const [index12, setIndex12] = useState(4);

  const handleLeft = () => {
    if (index11 > 0) {
      setIndex11(index11 - 1);
      setIndex12(index12 - 1);
    } else {
      setIndex11(sliderImg5.length - 4);
      setIndex12(sliderImg5.length);
    }
  };

  const handleRight = () => {
    if (index12 >= sliderImg5.length) {
      setIndex11(0);
      setIndex12(4);
    } else {
      setIndex11(index11 + 1);
      setIndex12(index12 + 1);
    }
  };

  return (     
    <>
      <div className="parent_line6">
        <div className="line6"></div>  {/* Ensure the class name matches your CSS */}
      </div>

      <div className="parent_slick6">
        <div className="sub_slick6">
          <ArrowBackIosIcon onClick={handleLeft} className="previous6" />
          <ArrowForwardIosIcon onClick={handleRight} className="next6" />
        </div>

        <div className="child_slick6">
          {sliderImg5.slice(index11, index12).map((item) => (
            <div className="create6" key={item.id}>  
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

export default Homechecklist;
