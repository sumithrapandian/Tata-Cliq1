import React from 'react'
import { Link } from 'react-router-dom'
import "./Parentlink.css";
import { useContext } from 'react';
import { Context } from '../../Homepage';
const Parentlink = () => {
  const {setPageStatus} = useContext(Context);
   
  const handleLoginStatus = (event)=>{
setPageStatus((prev) =>({
...prev, [event.target.innerText] : true
}))
  }

  const handleLoginStatusNone = (event)=>{
    setPageStatus((prev) =>({
      ...prev, [event.target.innerText] : false
      }))
  }     
  return (
    <>
    <div className="parentlinkcontainer">
        <div className="parentlinkcontent">
            <Link to={"/tatacliqluxury"} className='cart'>Tata CLiQ Luxury</Link>
            <div className="formate">
              
            <Link className='orders' to={'/cash'}>CliQ Cash</Link>
            <Link className='orders' to={'/cards'}>gift cards</Link>
            <Link className='orders' to={'/care'}>cliQ care</Link>
            <Link className='orders' to={'/trackorders'}>track orders</Link>
            <Link className='orders'
                 
            
            to={'/signin&signup'} onMouseOver={handleLoginStatus} onMouseOut={handleLoginStatusNone}>signInSignUp</Link>
             {/* <Link to={'/icon'}>Search</Link> */}
            </div>
        </div>
    </div> 
    
    </>
  )
}

export default Parentlink