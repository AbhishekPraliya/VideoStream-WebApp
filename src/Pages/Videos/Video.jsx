import React from 'react'
import "./Video.css"
import PlayVideo from '../../Components/PlayVideo/PlayVideo'
import Recommended from '../../Components/Recommended/Recommended'
import {useParams} from "react-router-dom"

const Video = (props) => {
    const {videoId,categoryId}=useParams();
    return (
        <div className={`play-container ${props.darkMode?"":"light-play-container"}`}>
            <PlayVideo darkMode={props.darkMode}/>
            <Recommended videoId={videoId} categoryId={categoryId} darkMode={props.darkMode}/>
        </div>
    )
}
export default Video
