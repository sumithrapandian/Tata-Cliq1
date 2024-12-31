import React from 'react';
import "./Login.css";
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import CardGiftcardOutlinedIcon from '@mui/icons-material/CardGiftcardOutlined';
import WorkOutlineOutlinedIcon from '@mui/icons-material/WorkOutlineOutlined';
       


const LoginHoverComponent = () => {
 
   
  return (
    <div className="superparent" >
      <div className="login_container">
        <ul>    
          <div className="parent_login">
            Login/Register
          </div>
          <li className='child' key="my-account"><AccountCircleOutlinedIcon /> My Account</li> 
          <li className='child' key="order-history"><ShoppingBagOutlinedIcon /> Order History</li> 
          <li className='child' key="my-wishlist"><FavoriteBorderOutlinedIcon /> My Wishlist</li> 
          <li className='child' key="alerts-coupon"><NotificationsNoneOutlinedIcon /> Alerts & Coupon</li> 
          <li className='child' key="gift-card"><CardGiftcardOutlinedIcon /> Gift Card</li> 
          <li className='child' key="cliq-cash"><WorkOutlineOutlinedIcon /> CLiQ Cash</li> 
        </ul>
      </div>
    </div>
  );
}

export default LoginHoverComponent; 