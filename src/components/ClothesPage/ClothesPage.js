import React from 'react';
import classes from './ClothesPage.module.css';

const ClothesPage = props => {
    return (
        <div className={classes.Primary}>
            <div className={classes.Title}>
                CLOTHING & FASHION | FEATURED ITEMS
            </div>
            <div className={classes.Car2}>
                <div className={classes.cards}>
                    <div className={classes.prodTitle}> Element Pocket Tee </div>
                    <div className={classes.cardImg}><img src={props.images[0]} alt="A pic here"/></div>
                </div>
                <div className={classes.cards}>
                    <div className={classes.prodTitle}> Essential Zip Hoodie </div>
                    <div className={classes.cardImg}><img src={props.images[1]} alt="A pic here"/></div>
                </div>
                <div className={classes.cards}>
                    <div className={classes.prodTitle}> Go-To Legging </div>
                    <div className={classes.cardImg}><img src={props.images[2]} alt="A pic here"/></div>
                </div>
                <div className={classes.cards}>
                    <div className={classes.prodTitle}> Pocket Tank </div>
                    <div className={classes.cardImg}><img src={props.images[3]} alt="A pic here"/></div>
                </div>
            </div>
            <div className={classes.Car2}>
            <div className={classes.cards}>
                    <div className={classes.prodTitle}> Liza High Straight Jean </div>
                    <div className={classes.cardImg}><img src={props.images[4]} alt="A pic here"/></div>
                </div>
                <div className={classes.cards}>
                    <div className={classes.prodTitle}> Serena High Skinny Jean </div>
                    <div className={classes.cardImg}><img src={props.images[5]} alt="A pic here"/></div>
                </div>
                <div className={classes.cards}>
                    <div className={classes.prodTitle}> Ammonite Bamboo Legging </div>
                    <div className={classes.cardImg}><img src={props.images[6]} alt="A pic here"/></div>
                </div>
                <div className={classes.cards}>
                    <div className={classes.prodTitle}> Fairtrade Organic Cotton Long Sleeve Top </div>
                    <div className={classes.cardImg}><img src={props.images[7]} alt="A pic here"/></div>
                </div>
            </div>
        </div>
    );
}

export default ClothesPage;