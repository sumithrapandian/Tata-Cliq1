import React, { useState, useEffect, createContext } from 'react';
import Parent from './parent/Parent';
import Curosel from './parentcomponents/Slider/Curosel';
import Beauty from './parentcomponents/main/Beauty';
import { Advertise } from './parentcomponents/advertise/Advertise';
import Title1 from './parentcomponents/titleheading/Title1';
import Imageslick from './parentcomponents/titleimage/firstimage/Imageslick';
import Title2 from './parentcomponents/titleheading/Title2';
import Websitestores from './parentcomponents/titleimage/firstimage/Websitestores';
import Indianwear from './parentcomponents/titleheading/Indianwear';
import Firstslider from './parentcomponents/titleimage/singleslider/Firstslider';
import Subsliderimg from './parentcomponents/titleimage/singleslider/subsliderimage/Subsliderimg';
import Hotboy from './parentcomponents/titleheading//Hotboy';
import Hotboytrends from './parentcomponents/titleimage/thirdimage/Hotboytrends';
import Nextfashion from './parentcomponents/titleheading/Nextfashion';
import Nextgeneration from './parentcomponents/titleimage/fourthimage/Nextgeneration';
import Homelist from './parentcomponents/titleheading/Homelist';
import Homechecklist from './parentcomponents/titleimage/fifthimage/Homechecklist';
import Womensfashion from './parentcomponents/headerhovercategorie/Womensfashion';
import Gadjet from './parentcomponents/titleheading/Gadjet';
import Gadjetden from './parentcomponents/titleimage/sixthimage/Gadjetden';
import Watchspace from './parentcomponents/titleheading/Watchspace';
import Watch from './parentcomponents/titleimage/seventhimage/Watch';
import Fullyframed from './parentcomponents/titleheading/Fullyframed';
import Fully from './parentcomponents/titleimage/eighthimage/Fully';
import Shineone from './parentcomponents/titleheading/Shineone';
import Shine from './parentcomponents/titleimage/ninethimage/Shine';
import Staysafe from './parentcomponents/aside/Staysafe';
import Asidecontent from './parentcomponents/asidecontent/Asidecontent';
import Asideapp from './parentcomponents/asideapp/Asideapp';
import Footer from './parentcomponents/footer/Footer';
import Categoriehover from './parentcomponents/parentlink/parentlinkcomponent2/Categoriehover';
import Brandhover from './parentcomponents/parentlink/parentlinkcomponent2/Brandhover';
import LoginHoverComponent from './parentcomponents/parentlink/parentlinkcomponents/LoginHoverComponent';
export const Context = createContext();

export default function Homepage() {

const [pageStatus, setPageStatus] = useState({
  Category:false,
  Brands : false,
  signInSignUp: false
})

 const [displayPageStatus, setDisplayPageStatus] = useState(false);
 const [displayBrandPage, setDisplayBrandPage] = useState(false);


  return (
    <div>
      <Context.Provider value={{ setPageStatus, displayPageStatus,displayBrandPage, setDisplayBrandPage, setDisplayPageStatus}} >
        <Parent />
        <Curosel />
        <div className="beautycontainer">
        <Beauty />
        </div>
        <Advertise />
        <Title1 />
        <Imageslick />
        <Title2 />   
        <Websitestores />
        <Indianwear />
        <Firstslider />
        <Subsliderimg />
        <Hotboy />
        <Hotboytrends />
        <Nextfashion />
        <Nextgeneration />
        <Homelist />
        <Homechecklist />
        <Womensfashion />
        <Gadjet />
        <Gadjetden />
        <Watchspace />
        <Watch />
        <Fullyframed />
        <Fully />
        <Shineone />
        <Shine />
        <Staysafe />
        <Asidecontent />
        <Asideapp />
        <Footer />




       { pageStatus.Category &&  <Categoriehover />} 
          {pageStatus.Brands && <Brandhover/>}  
         {pageStatus.signInSignUp && <LoginHoverComponent/> } 



      </Context.Provider>
      
    </div>
  );
}
