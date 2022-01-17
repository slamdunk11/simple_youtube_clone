import React from 'react';
import styles from '../assets/css/VideoItem.module.css'

const VideoItem = (props) => {
    const {channelTitle, title, thumbnails} = props.video.snippet
    
    return(
    <li>
        <div className={styles.box}>
            <img src={thumbnails.medium.url}/>
            <div>
                <p>{title}</p>
                <span>{channelTitle}</span>
            </div>
        </div>
    </li>            
    );}

export default VideoItem;