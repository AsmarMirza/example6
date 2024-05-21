import React from 'react'
import { Link } from 'react-router-dom'
import "./navbar.scss"
function Navbar() {
  return (
    <div className='navbar'>
<div className='esmer'>
            <div className='navBarIcon'>

        <img src="https://preview.colorlib.com/theme/course/images/logo.png.webp" alt="" />
        <h1> COURSE</h1>
        </div>
        <ul className='navUl'>
            <li><Link to={"/"}>Home</Link></li>
            <li><Link to={"/admin"}>Admin</Link></li>
            <li> <Link to={"/add"}>Add</Link></li>
            <li> <Link to={"/basket"}>Basket</Link></li>
            <li>  <Link to={"/wishlist"}>Wishlist</Link></li>
        </ul>
        <div className='navIcon'><i className="fa-solid fa-bars"></i></div>
        <div className='navContact'>
        <i className="fa-solid fa-phone-volume"></i>
            <p>+43 4566 7788 2457</p>
        </div>
</div>
    </div>
  )
}

export default Navbar