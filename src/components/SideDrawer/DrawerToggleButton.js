import React from 'react';
import classes from './DrawerToggleButton.module.css';
import { FiAlignJustify } from 'react-icons/fi';


const DrawerToggleButton = props => {
    return (
        <button className={ classes.ToggleButton } onClick={ props.click } ><FiAlignJustify color="white" size={ 30 } /></button>
    );
}

export default DrawerToggleButton