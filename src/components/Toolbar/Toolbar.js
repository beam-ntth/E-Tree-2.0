import React from 'react';
import classes from './Toolbar.module.css';
import { Link } from 'react-router-dom';
import { TiTree } from 'react-icons/ti';
import { /*FiShoppingCart,*/ FiHeart } from 'react-icons/fi';
import { GoSearch } from 'react-icons/go';
import DrawerToggleButton from '../SideDrawer/DrawerToggleButton';

const Toolbar = props => {
    let query = '';
    const getSearchQuery = () => {
        query = document.querySelector('input').value;
        window.location.replace('./search?query=' + query);
    }

    return (
        <header className={ classes.Toolbar }>
            <nav className={ classes.ToolbarNav }>
                <div></div>
                <DrawerToggleButton click={ props.drawerClickHandler } />
                <div className={ classes.ToolbarLogo }><Link to='/' >E <TiTree color="white" size={ 32 } /></Link></div>
                <div className={ classes.Spacer }></div>
                <div className={ classes.ToolbarSearch }>
                    <input type="text" placeholder="Search..." />
                </div>
                <GoSearch className="search-button" color="darkgoldenrod" size={ 32 } onClick={ getSearchQuery } style={ { cursor: 'pointer' } } />
                <div className={ classes.Spacer }></div>
                <Link to='/favorite'><div className={ classes.Heart }><FiHeart color="white" size={ 36 } /></div></Link>
                {/* <div className={classes.ToolbarCart} onClick={props.clickCart}><FiShoppingCart color="white" size={36} /></div> */ }
            </nav>
        </header>
    );
}

export default Toolbar;