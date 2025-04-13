import React from 'react'
import "./Navbar.css"
import darkMenuIcon from "../../assets/darkMenuIcon.png"
import lightMenuIcon from "../../assets/lightMenuIcon.png"
import newLogo from "../../assets/newLogo.png"
// import logo from "../../assets/logo.png"
import darkSearchIcon from "../../assets/darkSearchIcon.png"
import lightSearchIcon from "../../assets/lightSearchIcon.png"
import uploadIcon from "../../assets/uploadIcon.png"
import lightUploadIcon from "../../assets/lightUploadIcon.png"
// import moreIcon from "../../assets/menuIcon.png"
import notificationIcon from "../../assets/notificationIcon.png"
import lightNotificationIcon from "../../assets/lightNotificationIcon.png"
import profile from "../../assets/profile.png"
import darkMode from "../../assets/darkMode.png"
import lightMode from "../../assets/lightMode.png"
import {Link} from "react-router-dom"


const Navbar = (props) => {
    return (
        <nav className={`flex-div ${props.darkMode?"":"light"}`}>
            <div className="flex-div nav-left">
                <img src={props.darkMode?lightMenuIcon:darkMenuIcon} onClick={()=>props.setSidebar(prev=>prev===false?true:false)} className='menu-icon' alt=":->" />
                <Link to="/" className='flex-div'><img src={newLogo} className='logo' alt="Logo"/><h2>VideoStream</h2></Link>
            </div>
            <div className="nav-middle flex-div">
                <div className="search-box flex-div">
                    <input type="text" placeholder='Search'/>
                    <img src={props.darkMode?lightSearchIcon:darkSearchIcon} className='s-icon' alt="" />
                </div>
            </div>
            <div className="flex-div nav-right">
                <img src={props.darkMode?lightUploadIcon:uploadIcon} alt="" />
                <img src={props.darkMode?lightNotificationIcon:notificationIcon} alt="" />
                <img src={props.darkMode?(darkMode):(lightMode)} onClick={()=>props.setDarkMode(prev=>prev===true?false:true)} alt=''/>
                <img src={profile} onClick={()=>props.setDropdownDisable(prev=>prev===true?false:true)} className='user-icon' alt="" />
            </div>
            
        </nav>
    )
}

export default Navbar
