/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable array-callback-return */
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { API_KEY, value_converter } from '../../data';
import './Recommended.css';

const Recommended = ({categoryId,videoId,darkMode}) => {

    const [apiData, setApiData] = useState([]);

    const fetchData= async ()=>{
        // fetching data from api
        const relatedVideo_url=`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=25&regionCode=IN&videoCategoryId=${categoryId}&key=${API_KEY}`
        await fetch(relatedVideo_url).then(res=>res.json()).then(data=>setApiData(data.items));
    }
    useEffect(()=>{
        fetchData();
    },[]);

    return (
        <div className={`recommended ${darkMode?"":"light-recommended"}`}>
            {apiData && apiData.map((item,index)=>{
                if(videoId!==item.id){
                    return(
                        <Link to={`/video/${item.snippet.categoryId}/${item.id}`} key={index} className="side-video-list">
                            <img src={item.snippet.thumbnails.medium.url} alt="" />
                            <div className="vid-info">
                                <h4>{item.snippet.title}</h4>
                                <p>{item.snippet.channelTitle}</p>
                                <p>{value_converter(item.statistics.viewCount)} Views</p>
                            </div>
                        </Link>
                    )

                }
            })}
            

        </div>
    )
}

export default Recommended
