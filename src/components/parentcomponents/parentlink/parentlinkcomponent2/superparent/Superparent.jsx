import React from 'react'
import Categories from '../Categories'
import Brand from '../Brand'
import Search from '../Search'
import "./Superparent.css";
import Like from '../Like';
import Cart from '../Cart';
const Superparent = () => {
  return (
        <>
        <div className="parentmaintain">
        <div className="maintain">
            <div className="childmaintain">
        <Categories/>
        </div>
        <div className="submaintain">
        <Brand/>
        </div>
        <div className="search-container">
        <Search/>
        </div>
        <div className="like">
          <Like/>
        </div>
        <div className="cart_data">
          <Cart/>
        </div>   
        </div>
        </div>
        </>
  )
}

export default Superparent