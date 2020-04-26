import React from 'react';
import classes from './OfficePage.module.css';

const OfficePage = props => {
    return (
        <div className={classes.Primary}>
            <div className={classes.Title}>
                OFFICE SUPPLIES | FEATURED ITEMS
            </div>
            <div className={classes.Car2}>
                <div className={classes.cards}>
                    <div className={classes.prodTitle}> Post-it Greener Notes Original Recycled Pop-up Notes </div>
                    <div className={classes.cardImg}><img src={props.images[0]} alt="A pic here"/></div>
                </div>
                <div className={classes.cards}>
                    <div className={classes.prodTitle}> Rocketbook Fusion </div>
                    <div className={classes.cardImg}><img src={props.images[1]} alt="A pic here"/></div>
                </div>
                <div className={classes.cards}>
                    <div className={classes.prodTitle}> Rocketbook Mini </div>
                    <div className={classes.cardImg}><img src={props.images[2]} alt="A pic here"/></div>
                </div>
                <div className={classes.cards}>
                    <div className={classes.prodTitle}> Biodegradable iPhone Case 11 PRO </div>
                    <div className={classes.cardImg}><img src={props.images[3]} alt="A pic here"/></div>
                </div>
            </div>
            <div className={classes.Car2}>
            <div className={classes.cards}>
                    <div className={classes.prodTitle}> Rechargeable Batteries </div>
                    <div className={classes.cardImg}><img src={props.images[4]} alt="A pic here"/></div>
                </div>
                <div className={classes.cards}>
                    <div className={classes.prodTitle}> Pen Refill Black </div>
                    <div className={classes.cardImg}><img src={props.images[5]} alt="A pic here"/></div>
                </div>
                <div className={classes.cards}>
                    <div className={classes.prodTitle}> 6 Assorted Refillable Whiteboard Markers </div>
                    <div className={classes.cardImg}><img src={props.images[6]} alt="A pic here"/></div>
                </div>
                <div className={classes.cards}>
                    <div className={classes.prodTitle}> Alien Pen </div>
                    <div className={classes.cardImg}><img src={props.images[7]} alt="A pic here"/></div>
                </div>
            </div>
        </div>
    );
}

export default OfficePage;