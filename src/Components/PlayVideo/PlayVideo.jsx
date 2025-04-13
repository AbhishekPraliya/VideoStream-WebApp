/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import React,{useEffect, useState} from 'react'
import "./PlayVideo.css"
import lightLike from "../../assets/light-like.png"
import lightUnlike from "../../assets/light-unlike.png"
import lightShareIcon from "../../assets/lightShareIcon.png"
import darkShareIcon from "../../assets/darkShareIcon.png"
import darkLike from "../../assets/dark-like.png"
import darkUnlike from "../../assets/dark-unlike.png"
import save from "../../assets/save.png"
import lightSaveIcon from "../../assets/lightSaveIcon.png"
import profile from "../../assets/profile.png"
import { API_KEY, value_converter } from '../../data'
import moment from 'moment'
import { useParams } from 'react-router-dom'

const PlayVideo = (props) => {
    const {videoId}=useParams();

    const [isLike, setIsLike] = useState(false);
    const [subscribe, setSubscribe] = useState(false);
    const [apiData, setApiData] = useState(null);
    const [channelData, setChannelData] = useState(null);
    const [commentData, setCommentData] = useState(null);

    const fetchVideoData=async()=>{
        //fetching video data
        const videoDetails_url=`${process.env.videoDetailsUrl}&id=${videoId}&key=${API_KEY}`
        await fetch(videoDetails_url).then(res=>res.json()).then(data=>setApiData(data.items[0]));
        setSubscribe(false);
    }
    const fetchChannelData=async()=>{
        const channelData_url=`${process.env.channelDataUrl}&id=${apiData?apiData.snippet.channelId:"UCAuUUnT6oDeKwE6v1NGQxug"}&key=${API_KEY}`
        await fetch(channelData_url).then(res=>res.json()).then(data=>setChannelData(data.items[0]));
    }
    const fetchCommentData=async()=>{
        const comment_url=`${process.env.REACT_APP_commentUrl}&maxResults=10&videoId=${videoId}&key=${API_KEY}`
        await fetch(comment_url).then(res=>res.json()).then(data=>setCommentData(data.items));
    }

    useEffect(()=>{
        fetchVideoData();
        fetchCommentData();
    },[videoId]);

    useEffect(()=>{
        fetchChannelData();
    },[apiData]);

    // setSubscribe(false)

    return (
        <div className={`play-video ${props.darkMode?"":"light-play-video"}`}>
            {/* <video src={Video1} controls autoPlay muted></video> */}
            <iframe src={`https://www.youtube.com/embed/${videoId}?autoplay=1`} title="React Tutorial in Hindi 🔥🔥" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            <h3>{apiData?apiData.snippet.title:"Title Here"}</h3>
            <div className="play-video-info">
                <p>{apiData?value_converter(apiData.statistics.viewCount):"16k"} Views &bull; {apiData?moment(apiData.snippet.publishedAt).fromNow():"2 days ago"}</p>
                <div>
                    <span>
                        <img src={props.darkMode?lightLike:darkLike} alt="" />{apiData?value_converter(apiData.statistics.likeCount):125}
                    </span>
                    <span><img src={props.darkMode?lightUnlike:darkUnlike} alt="" />2</span>
                    <span><img src={props.darkMode?lightShareIcon:darkShareIcon} alt="" />Share</span>
                    <span><img src={props.darkMode?lightSaveIcon:save} alt="" />Save</span>
                </div>
            </div>
            <hr />
            <div className="publisher">
                <img src={channelData?channelData.snippet.thumbnails.default.url:profile} alt="" />
                <div>
                    <p>{apiData?apiData.snippet.channelTitle:"ChannelName"}</p>
                    <span>{channelData?value_converter(channelData.statistics.subscriberCount):'1M'} Subscribers</span>
                </div>
                <button style={subscribe?{backgroundColor:"gray"}:{backgroundColor:"red"}} onClick={()=>{subscribe?setSubscribe(false):setSubscribe(true)}}>Subscribe</button>
            </div>
            <div className="vid-discription">
                <p>{apiData?apiData.snippet.description.slice(0,250):"Description Here"}</p>
                <hr />
                <h4>{apiData?value_converter(apiData.statistics.commentCount):"51"} Comments</h4>

                {commentData && commentData.map((item,index)=>{
                    
                    return(
                        <div key={index} className="comment">
                            <img src={commentData?item.snippet.topLevelComment.snippet.authorProfileImageUrl:profile} alt="" />
                            <div>
                                <h3>{commentData?item.snippet.topLevelComment.snippet.authorDisplayName:"Channel"} <span>1 day ago</span></h3>
                                <p>{commentData?item.snippet.topLevelComment.snippet.textDisplay:"no-comment"}</p>
                                <div className='comment-action'>
                                    <img src={props.darkMode?lightLike:darkLike} alt="" />
                                    <span>{commentData?value_converter(item.snippet.topLevelComment.snippet.likeCount):2}</span>
                                    <img src={props.darkMode?lightUnlike:darkUnlike} alt="" />
                                </div>
                            </div>
                        </div>
                    )
                })}
                

            </div>
        </div>
    )
}

export default PlayVideo
