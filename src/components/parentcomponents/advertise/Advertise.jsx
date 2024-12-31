import React from 'react'
import "./Advertise.css";
import logo1 from './assets/ad1.avif';
import logo2 from './assets/ad2.jpg';
import logo3 from './assets/ad3.avif';
import logo4 from './assets/ad4.avif';
import logo5 from './assets/ad5.avif';
import logo6 from './assets/ad6.avif';
export const Advertise = () => {
    return (
        <>
            <div className="ad_parent">
                <div className="sub_ad">
                    <img src={logo1} alt="image" height={60} width={250} />
                    <img src={logo2} alt="image" height={60} width={250} />
                    <img src={logo3} alt="image" height={60} width={250}/>
                    <img src={logo4} alt="image" height={60} width={250}/>
                    <img src={logo5} alt="image" height={60} width={250}/>
                    <img src={logo6} alt="image" height={60} width={250}/>
                </div>
            </div>
        </>
    )
}
