import React from 'react';
import classes from './SideDrawer.module.css';
import { Link } from 'react-router-dom';
import { FiChevronRight } from 'react-icons/fi';

const SideDrawer = props => {
    let drawerClasses = [classes.SideDrawer];
    if (props.show) {
        drawerClasses.push(classes.Open);
    }
    return (
        <nav className={ drawerClasses.join(' ') }>
            <ul>
                <li>Shop By Category</li>
                <Link to='/kitchen' style={ { textDecoration: 'none' } }>
                    <li className={ classes.clickable }>
                        Household & Kitchen<div className={ classes.Spacer }></div><FiChevronRight size={ 30 } />
                    </li>
                </Link>
                <Link to='/clothes' style={ { textDecoration: 'none' } }>
                    <li className={ classes.clickable }>
                        Clothing<div className={ classes.Spacer }></div><FiChevronRight size={ 30 } />
                    </li>
                </Link>
                <Link to='/kids' style={ { textDecoration: 'none' } }>
                    <li className={ classes.clickable }>
                        For Kids<div className={ classes.Spacer }></div><FiChevronRight size={ 30 } />
                    </li>
                </Link>
                <Link to='/office' style={ { textDecoration: 'none' } }>
                    <li className={ classes.clickable }>
                        Office<div className={ classes.Spacer }></div><FiChevronRight size={ 30 } />
                    </li>
                </Link>
                <Link to='/personal' style={ { textDecoration: 'none' } }>
                    <li className={ classes.clickable } onClick={ props.clickPersonal }>
                        Personal Care<div className={ classes.Spacer }></div><FiChevronRight size={ 30 } />
                    </li>
                </Link>
                <Link to='/misc' style={ { textDecoration: 'none' } }>
                    <li className={ classes.clickable } onClick={ props.clickMisc }>
                        Miscellaneous<div className={ classes.Spacer }></div><FiChevronRight size={ 30 } />
                    </li>
                </Link>
            </ul>
        </nav>
    );
}

export default SideDrawer;