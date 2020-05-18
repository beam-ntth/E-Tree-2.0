import React from 'react';
import classes from './KitchenPage.module.css';

const KitchenPage = props => {
    return (
        <div className={ classes.Primary }>
            <div className={ classes.Title }>
                HOUSEHOLD & KITCHEN | FEATURED ITEMS
            </div>
            <div className={ classes.Car2 }>
                <div className={ classes.cards }>
                    <div className={ classes.prodTitle }> Organic Jersey Sheets </div>
                    <div className={ classes.cardImg }><img src={ props.images[0] } alt="A pic here" /></div>
                </div>
                <div className={ classes.cards }>
                    <div className={ classes.prodTitle }> Soft Washed Organic Sheets </div>
                    <div className={ classes.cardImg }><img src={ props.images[1] } alt="A pic here" /></div>
                </div>
                <div className={ classes.cards }>
                    <div className={ classes.prodTitle }> Organic Prague Bath Towel Set </div>
                    <div className={ classes.cardImg }><img src={ props.images[2] } alt="A pic here" /></div>
                </div>
                <div className={ classes.cards }>
                    <div className={ classes.prodTitle }> Organic Turkish Cotton Robe </div>
                    <div className={ classes.cardImg }><img src={ props.images[3] } alt="A pic here" /></div>
                </div>
            </div>
            <div className={ classes.Car2 }>
                <div className={ classes.cards }>
                    <div className={ classes.prodTitle }> Ecofriendly Stainless Steel Smoothie Straws </div>
                    <div className={ classes.cardImg }><img src={ props.images[4] } alt="A pic here" /></div>
                </div>
                <div className={ classes.cards }>
                    <div className={ classes.prodTitle }> Plastic Free Produce Bags </div>
                    <div className={ classes.cardImg }><img src={ props.images[5] } alt="A pic here" /></div>
                </div>
                <div className={ classes.cards }>
                    <div className={ classes.prodTitle }> Disposable Wooden Cutlery Set </div>
                    <div className={ classes.cardImg }><img src={ props.images[6] } alt="A pic here" /></div>
                </div>
                <div className={ classes.cards }>
                    <div className={ classes.prodTitle }> Detergent Spaghetti Corn Scrubs </div>
                    <div className={ classes.cardImg }><img src={ props.images[7] } alt="A pic here" /></div>
                </div>
            </div>
        </div>
    );
}

export default KitchenPage;