import React from 'react'
import "./Sidebar.css"
// import home from "../../assets/home.png"
// import news from "../../assets/news.png"
// import game from "../../assets/game.png"
// import automobile from "../../assets/automobile.png"
// import sports from "../../assets/sports.png"
// import entertainment from "../../assets/entertainment.png"
// import tech from "../../assets/tech.png"
// import music from "../../assets/music.png"
// import blogs from "../../assets/blogs.png"
import codewithharry from "../../assets/codewithharry.png"
import apnacollege from "../../assets/apnacollege.jpg"
import dhruvrathee from "../../assets/dhruvrathee.jpg"
import guri from "../../assets/guri.jpeg"
import NimratKhaira from "../../assets/NimratKhaira.jpg"

const Sidebar = (props) => {
    return (
        <div className={`sidebar ${props.sidebar?"":"small-sidebar"} ${props.darkMode?"":"lightSidebar"}`}>
            <div className="shortcut-links">
                <div className={`side-link ${props.category===0?"active":""}`} onClick={()=>props.setCategory(0)}>
                    {/* <img src={home} alt="" /><p>Home</p> */}
                    <i class="bi bi-house-fill "></i><p>Home</p>
                </div>
                <div className={`side-link ${props.category===20?"active":""}`} onClick={()=>props.setCategory(20)}>
                    {/* <img src={game} alt="" /><p>Gaming</p> */}
                    <i class="bi bi-controller"></i><p>Gaming</p>
                </div>
                <div className={`side-link ${props.category===2?"active":""}`} onClick={()=>props.setCategory(2)}>
                    {/* <img src={automobile} alt="" /><p>Automobile</p> */}
                    <i class="bi bi-car-front-fill"></i><p>Automobile</p>
                </div>
                <div className={`side-link ${props.category===17?"active":""}`} onClick={()=>props.setCategory(17)}>
                    {/* <img src={sports} alt="" /><p>Sports</p> */}
                    <i class="bi bi-trophy-fill"></i><p>Sports</p>
                </div>
                <div className={`side-link ${props.category===24?"active":""}`} onClick={()=>props.setCategory(24)}>
                    {/* <img src={entertainment} alt="" /><p>Entertainment</p> */}
                    <i class="bi bi-tv-fill"></i><p>Entertainment</p>
                </div>
                <div className={`side-link ${props.category===28?"active":""}`} onClick={()=>props.setCategory(28)}>
                    {/* <img src={tech} alt="" /><p>Technology</p> */}
                    <i class="bi bi-cpu-fill"></i><p>Technology</p>
                </div>
                <div className={`side-link ${props.category===10?"active":""}`} onClick={()=>props.setCategory(10)}>
                    {/* <img src={music} alt="" /><p>Music</p> */}
                    <i class="bi bi-headphones"></i><p>Music</p>
                </div>
                <div className={`side-link ${props.category===22?"active":""}`} onClick={()=>props.setCategory(22)}>
                    {/* <img src={blogs} alt="" /><p>Blogs</p> */}
                    <i class="bi bi-camera-fill" width="20" height="20"></i><p>Blogs</p>
                </div>
                <div className={`side-link ${props.category===25?"active":""}`} onClick={()=>props.setCategory(25)}>
                    {/* <img src={news} alt="" /><p>News</p> */}
                    <i class="bi bi-newspaper"></i><p>News</p>
                    
                </div>
            </div>
            <hr />
            <div className="subscribed-list">
                <h3>Subscribed</h3>
                <div className="side-link">
                    <img src={NimratKhaira} alt="" /><p>NimratKhaira</p>
                </div>
                <div className="side-link">
                    <img src={codewithharry} alt="" /><p>CodeWithHarry</p>
                </div>
                <div className="side-link">
                    <img src={apnacollege} alt="" /><p>ApnaCollege</p>
                </div>
                <div className="side-link">
                    <img src={dhruvrathee} alt="" /><p>DhruvRathee</p>
                </div>
                <div className="side-link">
                    <img src={guri} alt="" /><p>Guri</p>
                </div>
            </div>
            
        </div>
    )
}

export default Sidebar
