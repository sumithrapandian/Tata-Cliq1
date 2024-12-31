import React, { useState } from 'react';
import { sliderImg2 } from '../../titlefolder/data'; 
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import './Subsliderimg.css';
import { Link } from 'react-router-dom';

function Subsliderimg() {
  const [index5, setIndex5] = useState(0);
  const [index6, setIndex6] = useState(4);

 
  const handleLefterror = () => {
    if (index5 > 0) {
      setIndex5(index5 - 1);
      setIndex6(index6 - 1);
    } else {
      setIndex5(sliderImg2.length - 4);  
      setIndex6(sliderImg2.length);  
    }
  };


  const handleRighterror = () => {
    if (index6 < sliderImg2.length) {
      setIndex5(index5 + 1);
      setIndex6(index6 + 1);
    } else {
      setIndex5(0);  
      setIndex6(4);  
    }
  };
 

  return (
    <>
      <div className="parent_slick_container">
        <div className="sub_slick_container">
          <ArrowBackIosIcon onClick={handleLefterror} className="previous_container"/>
          <ArrowForwardIosIcon onClick={handleRighterror} className="next_container" />
        </div>

        <div className="child_slick_container">
          {sliderImg2.slice(index5, index6).map((item) => (
            <div className="create_container" key={item.id}>  
              <Link to={`/${item.name}`}>
                <img src={item.src} alt="slider" height={340} width={250} className='parent_head' />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Subsliderimg;
