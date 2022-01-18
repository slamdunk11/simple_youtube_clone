import React, {useRef} from 'react';
import styles from "../assets/css/SearchBar.module.css"
import SearchIcon from "@material-ui/icons/Search";
import { searchVideoListApi } from '../api/index';
const SearchBar = (props) => {
    const inputRef = useRef();
    const searchVideoList = (e) => {
        e.preventDefault();
        props.searchContent(inputRef.current.value);
    }
    const onKeyPress = (e) => {
        if(e.key === 'Enter'){
            e.preventDefault();
        props.searchContent(inputRef.current.value);
        }
    }
    return(
       <div className={styles.box}>
           <div className={styles.logo}>
               <img height="35px" src="https://www.logo.wine/a/logo/YouTube/YouTube-Icon-Full-Color-Logo.wine.svg"/>
                <span>Youtube</span>
           </div>
           <form onKeyPress={onKeyPress} className={styles.form}>
               <input ref={inputRef} className={styles.input}/>
               <button onClick={searchVideoList} className={styles.button}>
                   <SearchIcon/>
               </button>
           </form>
       </div>     
    );}

export default SearchBar;