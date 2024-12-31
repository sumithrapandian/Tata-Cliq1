import React from 'react'
import value from "../images/photojson/Image.json"
import { Link } from "react-router-dom"
import "./Beauty.css";
const Beauty = () => {
   
  return (
    <>
    <div className="image1">
      <div className="parent_image1">
      {value.map(item => ( 
        <Link to={`/product/${item.id}`} key={item.id}>
          <img src={item.src} alt="" height={160} width={130}  />
        </Link>
      ))}  
      </div>    
      </div> 
    </>
  )
}

export default Beauty;
