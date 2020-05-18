import React from 'react';
import classes from './KidsPage.module.css';

const KidsPage = props => {
    return (
        <div className={ classes.Primary }>
            <div className={ classes.Title }>
                KIDS SUPPLIES | FEATURED ITEMS
            </div>
            <div className={ classes.Car2 }>
                <div className={ classes.cards }>
                    <div className={ classes.prodTitle }> Eco Finger Paint </div>
                    <div className={ classes.cardImg }><img src={ props.images[0] } alt="A pic here" /></div>
                </div>
                <div className={ classes.cards }>
                    <div className={ classes.prodTitle }> Eco-Dough </div>
                    <div className={ classes.cardImg }><img src={ props.images[1] } alt="A pic here" /></div>
                </div>
                <div className={ classes.cards }>
                    <div className={ classes.prodTitle }> Recycled Newspaper Colored Pencils </div>
                    <div className={ classes.cardImg }><img src={ props.images[2] } alt="A pic here" /></div>
                </div>
                <div className={ classes.cards }>
                    <div className={ classes.prodTitle }> Tide Pool Bath Toys </div>
                    <div className={ classes.cardImg }><img src={ props.images[3] } alt="A pic here" /></div>
                </div>
            </div>
            <div className={ classes.Car2 }>
                <div className={ classes.cards }>
                    <div className={ classes.prodTitle }> Animal Friend Organic Baby Rattle </div>
                    <div className={ classes.cardImg }><img src={ props.images[4] } alt="A pic here" /></div>
                </div>
                <div className={ classes.cards }>
                    <div className={ classes.prodTitle }> Dump Truck Toy </div>
                    <div className={ classes.cardImg }><img src={ props.images[5] } alt="A pic here" /></div>
                </div>
                <div className={ classes.cards }>
                    <div className={ classes.prodTitle }> EverEarth Activity Walker </div>
                    <div className={ classes.cardImg }><img src={ props.images[6] } alt="A pic here" /></div>
                </div>
                <div className={ classes.cards }>
                    <div className={ classes.prodTitle }> Eco-Crayon Beeswax Crayon Sticks </div>
                    <div className={ classes.cardImg }><img src={ props.images[7] } alt="A pic here" /></div>
                </div>
            </div>
        </div>
    );
}

export default KidsPage;