import React from 'react';
import logoImage from "../singleslider/assets/logoslider.webp"; 
import "./Firstslider.css";
import { Link } from 'react-router-dom';
const Firstslider = () => {
  return (
    <>
    <div className="image_line">
      <div className="parent_imageline">
      
      </div>
    </div>
      <div className="image_slide">
        <div className="sub_imageslide">
            <Link to={'/slideimage'}>
          <img src={logoImage} alt="Logo Slider" className='child_imageslide' />
          </Link>
        </div>
      </div>
    </>
  );
}

export default Firstslider;
