import React from 'react';
import classes from './Toolbar.module.css';
import { TiTree } from 'react-icons/ti';
import { /*FiShoppingCart,*/ FiHeart } from 'react-icons/fi';
import { GoSearch } from 'react-icons/go';
import DrawerToggleButton from '../SideDrawer/DrawerToggleButton';

const Toolbar = props => {
    const getSearchQuery = () => {
        const query = document.querySelector('input').value;
        props.isSearch(query);
    }

    return (
        <header className={classes.Toolbar}>
            <nav className={classes.ToolbarNav}>
                <div></div>
                <DrawerToggleButton click={props.drawerClickHandler} />
                <div className={classes.ToolbarLogo}><a href="/">E <TiTree color="white" size={32} /></a></div>
                <div className={classes.Spacer}></div>
                <div className={classes.ToolbarSearch}>
                    <input type="text" placeholder="Search..." />
                </div>
                <GoSearch className="search-button" color="darkgoldenrod" size={32} onClick={getSearchQuery} style={{cursor: 'pointer'}} />
                <div className={classes.Spacer}></div>
                <div className={classes.Heart} onClick={props.clickHeart}><FiHeart color="white" size={36} /></div>
                {/* <div className={classes.ToolbarCart} onClick={props.clickCart}><FiShoppingCart color="white" size={36} /></div> */}
            </nav>
        </header>
    );
}

export default Toolbar;