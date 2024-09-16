import React from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <div id='header'> 
       <img src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/fkheaderlogo_exploreplus-44005d.svg" alt="logo" />
       <input id='headerInput' type="text" placeholder='Search for products,brands and more'/>
       <button><NavLink to='/Login'>Login</NavLink></button>
       <button><NavLink to='/Signup'>Signup</NavLink></button>
       <button><NavLink to='/AddPro'>AddPro</NavLink></button>
    </div>
  )
}

export default Header

