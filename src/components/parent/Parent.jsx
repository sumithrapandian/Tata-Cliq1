import React from 'react'
import './Parent.css'
import Logo from '../parentcomponents/logo/Logo'
import Parentlink from '../parentcomponents/parentlink/Parentlink'
import Superparent from '../parentcomponents/parentlink/parentlinkcomponent2/superparent/Superparent'
import Beauty from '../parentcomponents/main/Beauty'
import Categoriehover from '../parentcomponents/parentlink/parentlinkcomponent2/Categoriehover'
const Parent = () => {
  return (
  <>
  <div className="parentcontainer">
    <div className="component1">
        <Logo/>
        </div>
        <div className="create">  
        <Parentlink/>
        <Superparent/> 
        
        </div>
    </div> 
  
  </>
  )
}

export default Parent