import React from 'react'
import "./Asideapp.css";
import AppleIcon from '@mui/icons-material/Apple';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
const Asideapp = () => {
  return (
    <>
    <div className="parent_icon">
        <div className="child_icon">
            Download App
            <AppleIcon/>
        </div>
        <div className="child_icon">
         <FacebookIcon/>
         <InstagramIcon/>
         <YouTubeIcon/>
         <LinkedInIcon/>
        </div>
        <div className="child_icon">
         
         2024 Tata CLiQ | All rights reserved
        </div>
    </div>
    </>
  )
}

export default Asideapp