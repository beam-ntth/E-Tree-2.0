import React from 'react';
import classes from './SearchCount.module.css';

const SearchCount = (props) => {
    return (
        <nav className={classes.Result}>
            {props.count} search results of "{props.name}"
        </nav>
    );
}

export default SearchCount;