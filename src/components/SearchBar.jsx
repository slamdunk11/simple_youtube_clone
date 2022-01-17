import React from 'react';
import styles from "../assets/css/SearchBar.module.css"
import SearchIcon from "@material-ui/icons/Search";
const SearchBar = (props) => {
    return(
       <div className={styles.box}>
           <div className={styles.logo}>
               <img height="35px" src="https://www.logo.wine/a/logo/YouTube/YouTube-Icon-Full-Color-Logo.wine.svg"/>
                <span>Youtube</span>
           </div>
           <form className={styles.form}>
               <input className={styles.input}/>
               <button className={styles.button}>
                   <SearchIcon/>
               </button>
           </form>
       </div>     
    );}

export default SearchBar;