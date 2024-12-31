
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Parent from './components/parent/Parent';
import Cliqluxury from './components/parentcomponents/parentlink/parentlinkcomponents/Cliqluxury';
import Cliqcash from './components/parentcomponents/parentlink/parentlinkcomponents/Cliqcash';
import Cliqcard from './components/parentcomponents/parentlink/parentlinkcomponents/Giftcards';
import Cliqcare from './components/parentcomponents/parentlink/parentlinkcomponents/Clicqcare';
import Trackorders from './components/parentcomponents/parentlink/parentlinkcomponents/Trackorders';
import Signinsignup from './components/parentcomponents/parentlink/parentlinkcomponents/Signinsignup';
import Curosel from './components/parentcomponents/Slider/Curosel';
import ProductDetails from './components/parentcomponents/main/ProductDetails';
import Beauty from './components/parentcomponents/main/Beauty';
import Homepage from './components/Homepage';
import Imageslick from './components/parentcomponents/titleimage/firstimage/Imageslick';
import Lebas from './components/parentcomponents/titleimage/firstimage/Lebas';
import Veromoda from './components/parentcomponents/titleimage/firstimage/Veromoda';
import Levis from './components/parentcomponents/titleimage/firstimage/Levis';
import Adidas from './components/parentcomponents/titleimage/firstimage/Adidas';
import Uspolo from './components/parentcomponents/titleimage/firstimage/Uspolo';
import Woodland from './components/parentcomponents/titleimage/firstimage/Woodland';
import Titan from './components/parentcomponents/titleimage/firstimage/Titan';
import Puma from './components/parentcomponents/titleimage/firstimage/Puma';
import Websitestores from './components/parentcomponents/titleimage/firstimage/Websitestores';
import Kurtas from './components/parentcomponents/titleimage/firstimage/Kurtas';
import Winter from './components/parentcomponents/titleimage/firstimage/Winter';
import Tops from './components/parentcomponents/titleimage/firstimage/Tops';
import Dresses from './components/parentcomponents/titleimage/firstimage/Dresses';
import Sleepwear from './components/parentcomponents/titleimage/firstimage/Sleepwear';
import Footwear from './components/parentcomponents/titleimage/firstimage/Footwear';
import Tshirt from './components/parentcomponents/titleimage/firstimage/Tshirt';
import Footwearshoes from './components/parentcomponents/titleimage/firstimage/Footwearshoes';
import Firstslider from './components/parentcomponents/titleimage/singleslider/Firstslider';
import Firstslider1 from './components/parentcomponents/titleimage/singleslider/Firstslider1';
import Subsliderimg from './components/parentcomponents/titleimage/singleslider/subsliderimage/Subsliderimg';
import Embroidekurtas from './components/parentcomponents/titleimage/singleslider/subsliderimage/Embroidekurtas'; 
import Suitsets from './components/parentcomponents/titleimage/singleslider/subsliderimage/Suitsets';
import Sarees from './components/parentcomponents/titleimage/singleslider/subsliderimage/Sarees';
import Lehangas from './components/parentcomponents/titleimage/singleslider/subsliderimage/Lehangas';
import Fusionsets from './components/parentcomponents/titleimage/singleslider/subsliderimage/Fusionsets';
import Silksarees from './components/parentcomponents/titleimage/singleslider/subsliderimage/Silksarees';
import Sparkling from './components/parentcomponents/titleimage/singleslider/subsliderimage/Sparkling';
import Hotboytrends from './components/parentcomponents/titleimage/thirdimage/Hotboytrends';
import Formal from './components/parentcomponents/titleimage/thirdimage/Formal';
import Cool from './components/parentcomponents/titleimage/thirdimage/Cool';
import Sharp from './components/parentcomponents/titleimage/thirdimage/Sharp';
import Allday from './components/parentcomponents/titleimage/thirdimage/Allday';
import Outerlayer from './components/parentcomponents/titleimage/thirdimage/Outerlayer';
import Outerlayerlove from './components/parentcomponents/titleimage/thirdimage/Outerlayerlove';
import Everyday from './components/parentcomponents/titleimage/thirdimage/Everyday';
import Nextgeneration from './components/parentcomponents/titleimage/fourthimage/Nextgeneration';
import Casualdresses from './components/parentcomponents/titleimage/fourthimage/Casualdresses';
import Tshirtpolos from './components/parentcomponents/titleimage/fourthimage/Tshirtpolos';
import Indianwear from './components/parentcomponents/titleimage/fourthimage/Indianwear';
import Partydresses from './components/parentcomponents/titleimage/fourthimage/Partydresses';
import Topstees from './components/parentcomponents/titleimage/fourthimage/Topstees';
import Jeans from './components/parentcomponents/titleimage/fourthimage/Jeans';
import Homechecklist from './components/parentcomponents/titleimage/fifthimage/Homechecklist';
import Bed from './components/parentcomponents/titleimage/fifthimage/Bed';
import Cookware from './components/parentcomponents/titleimage/fifthimage/Coockware';
import Decore from './components/parentcomponents/titleimage/fifthimage/Decore';
import Homeapp from './components/parentcomponents/titleimage/fifthimage/Homeapp';
import Lamp from './components/parentcomponents/titleimage/fifthimage/Lamp';
import Serveware from './components/parentcomponents/titleimage/fifthimage/Serveware';
import Kitchen from './components/parentcomponents/titleimage/fifthimage/Kitchen';
import Gadjetden from './components/parentcomponents/titleimage/sixthimage/Gadjetden';
import Oneplus from './components/parentcomponents/titleimage/sixthimage/Oneplus';
import Samsung from './components/parentcomponents/titleimage/sixthimage/Samsung';
import Sony from './components/parentcomponents/titleimage/sixthimage/Sony';
import Marshall from './components/parentcomponents/titleimage/sixthimage/Marshall';
import Apple from './components/parentcomponents/titleimage/sixthimage/Apple';
import Sandisk from './components/parentcomponents/titleimage/sixthimage/Sandisk';
import Portronic from './components/parentcomponents/titleimage/sixthimage/Portronic';
import Watch from './components/parentcomponents/titleimage/seventhimage/Watch';
import Milano from './components/parentcomponents/titleimage/seventhimage/Milano';
import French from './components/parentcomponents/titleimage/seventhimage/French';
import Earnshaw from './components/parentcomponents/titleimage/seventhimage/Earnshaw';
import Ax from './components/parentcomponents/titleimage/seventhimage/Ax';
import Cole from './components/parentcomponents/titleimage/seventhimage/Cole';
import Hills from './components/parentcomponents/titleimage/seventhimage/Hills';
import Philipp from './components/parentcomponents/titleimage/seventhimage/Philipp';
import Fully from './components/parentcomponents/titleimage/eighthimage/Fully';
import Ray from './components/parentcomponents/titleimage/eighthimage/Ray';
import Ted from './components/parentcomponents/titleimage/eighthimage/Ted';
import Polaroid from './components/parentcomponents/titleimage/eighthimage/Polaroid';
import Carrera from './components/parentcomponents/titleimage/eighthimage/Carrera';
import Oakely from './components/parentcomponents/titleimage/eighthimage/Oakely';
import Resist from './components/parentcomponents/titleimage/eighthimage/Resist';

function App() {
  return (
    <div className="App">
      <Router> 
        
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/tatacliqluxury' element={<Cliqluxury />} />
          <Route path='/cash' element={<Cliqcash />} />
          <Route path='/cards' element={<Cliqcard />} />
          <Route path='/care' element={<Cliqcare />} />
          <Route path='/trackorders' element={<Trackorders />} />
          <Route path='/signin&signup' element={<Signinsignup />} />
          <Route path='/product/:id' element={<ProductDetails />} />
          <Route path='/imageslick' element={<Imageslick />} />
          <Route path='/lebas' element={<Lebas />} />
          <Route path='/veromoda' element={<Veromoda />} />
          <Route path='/levis' element={<Levis/>} />
          <Route path='/adidas' element={<Adidas/>} />
          <Route path='/uspolo' element={<Uspolo />} />
          <Route path='/woodland' element={<Woodland/>} />
          <Route path='/titan' element={<Titan/>} />
          <Route path='/puma' element={<Puma/>} />
          <Route path='/Websitestores' element={<Websitestores/>} />
          <Route path='/kurtas' element={<Kurtas/>} />
          <Route path='/winter' element={<Winter/>} />
          <Route path='/tops' element={<Tops/>} />
          <Route path='/dresses' element={<Dresses/>} />
          <Route path='/sleepwear' element={<Sleepwear/>} />
          <Route path='/footwear' element={<Footwear/>} />
          <Route path='/tshirt' element={<Tshirt/>} />
          <Route path='/footwearshoes' element={<Footwearshoes/>} />
          {/* <Route path='/slideimage' element={<Firstslider/>} /> */}
          <Route path='/sliderimage' element={<Firstslider1/>} />
          <Route path='/subslider' element={<Subsliderimg/>} />
          <Route path='/embroidekurtas' element={<Embroidekurtas/>} />
          <Route path='/suit sets' element={<Suitsets/>} />
          <Route path='/sarees' element={<Sarees/>} />
          <Route path='/lehangas' element={<Lehangas/>} />
          <Route path='/fusion sets' element={<Fusionsets/>} />
          <Route path='/silk sarees' element={<Silksarees/>} />
          <Route path='/sparkling' element={<Sparkling/>} />
          <Route path='/hotboytrends' element={<Hotboytrends/>} />
          <Route path='/formal' element={<Formal/>} />
          <Route path='/cool' element={<Cool/>} />
          <Route path='/sharp' element={<Sharp/>} />
          <Route path='/allday' element={<Allday/>} />
          <Route path='/Outerlayer' element={<Outerlayer/>} />
          <Route path='/Outerlayerlove' element={<Outerlayerlove/>} />
          <Route path='/everyday' element={<Everyday/>} />
          <Route path='/Nextgeneration' element={<Nextgeneration/>} />
          <Route path='/casual dresses' element={<Casualdresses/>} />
          <Route path='/tshirt' element={<Tshirtpolos/>} />
          <Route path='/indian wear' element={<Indianwear/>} />
          <Route path='/party dresses' element={<Partydresses/>} />
          <Route path='/tops' element={<Topstees/>} />
          <Route path='/jeans' element={<Jeans/>} />
          <Route path='/homechecklist' element={<Homechecklist/>} />
          <Route path='/bed' element={<Bed/>} />
          <Route path='/cookware' element={<Cookware/>} />
          <Route path='/decore' element={<Decore/>} />
          <Route path='/home appliances' element={<Homeapp/>} />
          <Route path='/lamp' element={<Lamp/>} />
          <Route path='/serveware' element={<Serveware/>} />
          <Route path='/kitchen' element={<Kitchen/>} />
          <Route path='/gadjetden' element={<Gadjetden/>} />
          <Route path='/one plus' element={<Oneplus/>} />
          <Route path='/samsung' element={<Samsung/>} />
          <Route path='/sony' element={<Sony/>} />
          <Route path='/marshall' element={<Marshall/>} />
          <Route path='/apple' element={<Apple/>} />
          <Route path='/sandisk' element={<Sandisk/>} />
          <Route path='/portronic' element={<Portronic/>} />
          <Route path='/watch' element={<Watch/>} />
          <Route path='/milano' element={<Milano/>} />
          <Route path='/french' element={<French/>} />
          <Route path='/earnshaw' element={<Earnshaw/>} />
          <Route path='/ax' element={<Ax/>} />
          <Route path='/cole' element={<Cole/>} /> 
          <Route path='/hills' element={<Hills/>} />
          <Route path='/Philipp' element={<Philipp/>} />
          <Route path='/fully' element={<Fully/>}/>
          <Route path='/ray' element={<Ray/>}/>
          <Route path='ted' element={<Ted/>}/>
          <Route path='/polaroid' element={<Polaroid/>}/>
          <Route path='/carrera' element={<Carrera/>}/>
          <Route path='/oakley' element={<Oakely/>}/>
          <Route path='/resist' element={<Resist/>}/>

           
        </Routes>
      </Router>
    </div>
  );
}

export default App;
