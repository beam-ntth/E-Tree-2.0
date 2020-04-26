import React from 'react';
import classes from './PersonalPage.module.css';

const PersonalPage = props => {
    return (
        <div className={classes.Primary}>
            <div className={classes.Title}>
                PERSONAL CARE | FEATURED ITEMS
            </div>
            <div className={classes.Car2}>
                <div className={classes.cards}>
                    <div className={classes.prodTitle}> ECO Sachet Shampoo and Conditioner </div>
                    <div className={classes.cardImg}><img src={props.images[0]} alt="A pic here"/></div>
                </div>
                <div className={classes.cards}>
                    <div className={classes.prodTitle}> Not Sleepy Shower Bomb </div>
                    <div className={classes.cardImg}><img src={props.images[1]} alt="A pic here"/></div>
                </div>
                <div className={classes.cards}>
                    <div className={classes.prodTitle}> Magic Crystals Shower Scrub </div>
                    <div className={classes.cardImg}><img src={props.images[2]} alt="A pic here"/></div>
                </div>
                <div className={classes.cards}>
                    <div className={classes.prodTitle}> Ethique Eco-Friendly Solid Shampoo Bar </div>
                    <div className={classes.cardImg}><img src={props.images[3]} alt="A pic here"/></div>
                </div>
            </div>
            <div className={classes.Car2}>
            <div className={classes.cards}>
                    <div className={classes.prodTitle}> 7 To 3 Cleansing Wipe </div>
                    <div className={classes.cardImg}><img src={props.images[4]} alt="A pic here"/></div>
                </div>
                <div className={classes.cards}>
                    <div className={classes.prodTitle}> Whipped Coconut Oil Body Cream </div>
                    <div className={classes.cardImg}><img src={props.images[5]} alt="A pic here"/></div>
                </div>
                <div className={classes.cards}>
                    <div className={classes.prodTitle}> Baby + Kids Paper Stick SPF 30+ </div>
                    <div className={classes.cardImg}><img src={props.images[6]} alt="A pic here"/></div>
                </div>
                <div className={classes.cards}>
                    <div className={classes.prodTitle}> Badger - SPF 35 Sport Sunscreen Cream </div>
                    <div className={classes.cardImg}><img src={props.images[7]} alt="A pic here"/></div>
                </div>
            </div>
        </div>
    );
}

export default PersonalPage;