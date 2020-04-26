import React from 'react';
import classes from './SideDrawer.module.css';
import { FiChevronRight } from 'react-icons/fi';

const SideDrawer = props => {
    let drawerClasses = [classes.SideDrawer];
    if (props.show) {
        drawerClasses.push(classes.Open);
    }
    return (
        <nav className={drawerClasses.join(' ')}>
            <ul> 
                <li>Shop By Category</li>
                <li className={classes.clickable} onClick={props.clickKitchen}>
                    Household & Kitchen<div className={classes.Spacer}></div><FiChevronRight size={30}/>
                </li>
                <li className={classes.clickable} onClick={props.clickClothes}>
                    Clothing<div className={classes.Spacer}></div><FiChevronRight size={30}/>
                </li>
                <li className={classes.clickable} onClick={props.clickKids}>
                    For Kids<div className={classes.Spacer}></div><FiChevronRight size={30}/>
                </li>
                <li className={classes.clickable} onClick={props.clickOffice}>
                    Office<div className={classes.Spacer}></div><FiChevronRight size={30}/>
                </li>
                <li className={classes.clickable} onClick={props.clickPersonal}>
                    Personal Care<div className={classes.Spacer}></div><FiChevronRight size={30}/>
                </li>
                <li className={classes.clickable} onClick={props.clickMisc}>
                    Miscellaneous<div className={classes.Spacer}></div><FiChevronRight size={30}/>
                </li>
            </ul>
        </nav>
    );
}

export default SideDrawer;