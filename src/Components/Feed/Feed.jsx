/* eslint-disable react-hooks/exhaustive-deps */
import moment from "moment"
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { API_KEY, value_converter } from '../../data'
import "./Feed.css"


const Feed = (props) => {

    const [apiData, setApiData] = useState([]);
    const fetchData=async()=>{
        const videoList_url=`${process.env.REACT_APP_Video_List_Url}&videoCategoryId=${props.category}&key=${API_KEY}`
        await fetch(videoList_url).then(response=>response.json()).then(data=>setApiData(data.items));
    }
    useEffect(()=>{
        fetchData();
    },[props.category])

    return (
        <div className={`feed ${props.darkMode?"":"lightFeed"}`}>
            {apiData.map((item,index)=>{
                return(
                    <Link to={`/video/${item.snippet.categoryId}/${item.id}`}  className='card'>
                        <img src={item.snippet.thumbnails.medium.url} alt="" />
                        <h2>{item.snippet.title}</h2>
                        <h3>{item.snippet.channelTitle}</h3>
                        <p>{value_converter(item.statistics.viewCount)} views &bull;  {moment(item.snippet.publishedAt).fromNow()}</p>
                    </Link>
                )
            })}

        </div>
    )
}

export default Feed
