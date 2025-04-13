import React from 'react'
import "./Home.css";
import Sidebar from '../../Components/Sidebar/Sidebar';
import Feed from '../../Components/Feed/Feed.jsx';
const Home = (props) => {
    return (
        <>
            <Sidebar sidebar={props.sidebar} category={props.category} setCategory={props.setCategory} darkMode={props.darkMode}/>
            <div className={`container ${props.sidebar?"":"large-container"} ${props.darkMode?"":"lightMode"}`}>
                <Feed category={props.category} darkMode={props.darkMode} />
            </div>
        </>
    )
}
export default Home
