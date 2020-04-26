import React from 'react';
import classes from './MiscPage.module.css';

const MiscPage = props => {
    return (
        <div className={classes.Primary}>
            <div className={classes.Title}>
                MISCELLANEOUS | FEATURED ITEMS
            </div>
            <div className={classes.Car2}>
                <div className={classes.cards}>
                    <div className={classes.prodTitle}> Large Reusable Grocery Bags </div>
                    <div className={classes.cardImg}><img src={props.images[0]} alt="A pic here"/></div>
                </div>
                <div className={classes.cards}>
                    <div className={classes.prodTitle}> Biodegradable Trash Bags </div>
                    <div className={classes.cardImg}><img src={props.images[1]} alt="A pic here"/></div>
                </div>
                <div className={classes.cards}>
                    <div className={classes.prodTitle}> Earth Rated Dog Poop Bags </div>
                    <div className={classes.cardImg}><img src={props.images[2]} alt="A pic here"/></div>
                </div>
            </div>
            <div className={classes.Car2}>
            <div className={classes.cards}>
                    <div className={classes.prodTitle}> Earthwise Grocery Shopping Tote </div>
                    <div className={classes.cardImg}><img src={props.images[3]} alt="A pic here"/></div>
                </div>
                <div className={classes.cards}>
                    <div className={classes.prodTitle}> Cotton Canvas Grocery Bags </div>
                    <div className={classes.cardImg}><img src={props.images[4]} alt="A pic here"/></div>
                </div>
            </div>
        </div>
    );
}

export default MiscPage;