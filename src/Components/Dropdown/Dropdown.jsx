import React, { useState } from 'react'
import profile from "../../assets/profile.png"
import "./Dropdown.css"
import darkMode from "../../assets/darkMode.png"
import lightMode from "../../assets/lightMode.png"
import lightLogInIcon from "../../assets/lightLogInIcon.png"
import darkLogInIcon from "../../assets/darkLogInIcon.png"
import lightLogOutIcon from "../../assets/lightLogOutIcon.png"
import darkLogOutIcon from "../../assets/darkLogOutIcon.png"

export default function Dropdown(props) {
    const [logIn, setLogIn] = useState(true);
    return (
        <div className={`Dropdown ${props.dropdownDisable?"DropdownDisable":""} ${props.darkMode?"":"light"}`}>
            <div className="accountBox">
                <img src={profile} alt="" />
                <div className='accountDetail'>
                    <h3>Abcd</h3>
                    <h3>abcd12@xyz</h3>
                    <h4>Your Account</h4>
                </div>
            </div>
            <div className='logInBox darkModeBox' onClick={()=>setLogIn(prev=>!prev)}>
                {
                    logIn?
                    <img src={props.darkMode?lightLogOutIcon:darkLogOutIcon} alt="" />
                    :
                    <img src={props.darkMode?lightLogInIcon:darkLogInIcon} alt="" />
                }
                <h3>{logIn?"LogOut":"LogIn"}</h3>
            </div>
            <hr />
            <div className="anotherDetail">
                <div className="darkModeBox" onClick={()=>props.setDarkMode(prev=>prev===true?false:true)}>
                    <img src={props.darkMode?darkMode:lightMode} alt="" />
                    <h3>{props.darkMode?"DarkMode":"LightMode"}</h3>
                </div>
                <div className="dropdown-links">
                    <div className={`dropdown-link ${props.category===0?"active":""}`} onClick={()=>props.setCategory(0)}>
                        {/* <img src={home} alt="" /><p>Home</p> */}
                        <i class="bi bi-house-fill "></i>
                    </div>
                    <div className={`dropdown-link ${props.category===20?"active":""}`} onClick={()=>props.setCategory(20)}>
                        {/* <img src={game} alt="" /><p>Gaming</p> */}
                        <i class="bi bi-controller"></i>
                    </div>
                    <div className={`dropdown-link ${props.category===2?"active":""}`} onClick={()=>props.setCategory(2)}>
                        {/* <img src={automobile} alt="" /><p>Automobile</p> */}
                        <i class="bi bi-car-front-fill"></i>
                    </div>
                    <div className={`dropdown-link ${props.category===17?"active":""}`} onClick={()=>props.setCategory(17)}>
                        {/* <img src={sports} alt="" /><p>Sports</p> */}
                        <i class="bi bi-trophy-fill"></i>
                    </div>
                    <div className={`dropdown-link ${props.category===24?"active":""}`} onClick={()=>props.setCategory(24)}>
                        {/* <img src={entertainment} alt="" /><p>Entertainment</p> */}
                        <i class="bi bi-tv-fill"></i>
                    </div>
                    <div className={`dropdown-link ${props.category===28?"active":""}`} onClick={()=>props.setCategory(28)}>
                        {/* <img src={tech} alt="" /><p>Technology</p> */}
                        <i class="bi bi-cpu-fill"></i>
                    </div>
                    <div className={`dropdown-link ${props.category===10?"active":""}`} onClick={()=>props.setCategory(10)}>
                        {/* <img src={music} alt="" /><p>Music</p> */}
                        <i class="bi bi-headphones"></i>
                    </div>
                    <div className={`dropdown-link ${props.category===22?"active":""}`} onClick={()=>props.setCategory(22)}>
                        {/* <img src={blogs} alt="" /><p>Blogs</p> */}
                        <i class="bi bi-camera-fill" width="20" height="20"></i>
                    </div>
                    <div className={`dropdown-link ${props.category===25?"active":""}`} onClick={()=>props.setCategory(25)}>
                        <i class="bi bi-newspaper"></i>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}
