import React from 'react';
import styles from '../assets/css/VideoItem.module.css'

const VideoItem = (props) => {
    const {channelTitle, title, thumbnails} = props.video.snippet
    
    return(
    <li className={styles.box}>
        <img className={styles.img} src={thumbnails.medium.url}/>
        <div className={styles.text}>
            <div>
                <p className={styles.title}>{title}</p>
                <span className={styles.channel}>{channelTitle}</span>
            </div>
        </div>
    </li>            
    );}

export default VideoItem;