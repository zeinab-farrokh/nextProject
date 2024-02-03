import React from 'react';
import styles from "./searchBox.module.css"
const SearchBox = ({searchData}) => {
    return (
        <div className={`${styles.container} flex m-3 items-center`}>
              
              <img src={searchData.image} alt="search"/>
              <h3 className="mr-2">{searchData.title}</h3>
              
        </div>
    );
};

export default SearchBox;