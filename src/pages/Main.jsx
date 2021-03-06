import React, { useState } from 'react';
import { useEffect } from 'react';
// import youtubeApi from '../api/index/youtubeApi'
import { getVideoList, searchVideoListApi } from '../api/index';
import SearchBar from '../components/SearchBar';
import VideoItem from '../components/VideoItem';
import styles from '../assets/css/Main.module.css'

const Main = (props) => {
    const [videoItems, setVideoItems] = useState([]);
    useEffect(() => {
        getVideoList()
        .then(response => {
            console.log(response.data.items)
            setVideoItems(response.data.items);
            console.log('videoItem', videoItems)}
            )
        .catch(error=> console.log(error))
    }, [])
    const searchContent = (searchKeyword) => {
        searchVideoListApi(searchKeyword)
        .then(response => {
            // console.log('searchKeyword', inputRef.current.value)
            // console.log('result', response.data)
            setVideoItems(response.data.items);
        })
        .catch(error => console.log(error))
    }
    return(
        <>
            <SearchBar searchContent={searchContent}/>
            <div className={styles.box}>
                <ul className={styles.list}>
                    {
                        videoItems.map(video => (
                            <VideoItem key={video.id} video={video}/>
                        ))
                    }
                </ul>
            </div>

        </>
    );}

export default Main;