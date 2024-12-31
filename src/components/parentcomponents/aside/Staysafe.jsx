import React from "react";
import "./Staysafe.css";
import logo2 from "../aside/assets/asidelogo.png";
const Staysafe = () => {
    return (
        <>
        <div className="parentaside">
                <div className="subaside">
                    <div className="content">
                        <h1>SHOP SMART & STAY SAFE</h1>
                        <div className="message">
                            Trust only Tata CLIQ's official channel for exclusive offers.
                        </div>
                        <div className="message">
                            We DO NOT make telemarketing calls or host lucky draws,
                        </div>
                        <div className="message">
                            We DO NOT send QR codes or request payment outside our
                        </div>
                        <div className="message">
                        official app or website.
                        </div>
                        <div className="passing">
                            CLIQ to learn how you can enjoy a secure shopping experience.
                        </div>
                    </div>
                    <div className="sub_message">
                            <img src={logo2} alt="image" height={220} width={220} className="asideimage" />
                        </div>
                </div>
                
            </div>
           
         
            

            
        </>
    );
};

export default Staysafe;
