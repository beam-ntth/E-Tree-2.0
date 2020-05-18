import React, { Component } from 'react';
import classes from './HeartPage.module.css';
import Ratings from 'react-rating';
import { MdStar, MdStarBorder } from 'react-icons/md';
import Button from '@material-ui/core/Button';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';

class HeartPage extends Component {

    render() {
        const storage = JSON.parse(localStorage.getItem('hearts'));
        console.log(storage)
        let favList;
        if (storage) {
            favList = storage.map(obj => {
                return (
                    <div className={ classes.Listing }>
                        <div className={ classes.ImgSec }><img src={ obj.image[0] } alt="A pic here" /></div>
                        <div className={ classes.Rhs }>
                            <div className={ classes.Title }> { obj.title } </div>
                            <div className={ classes.Brand }> { obj.brand } </div>
                            <Ratings
                                emptySymbol={ <MdStarBorder color="#ffcc00" size={ 30 }></MdStarBorder> }
                                fullSymbol={ <MdStar color="#ffcc00" size={ 30 }></MdStar> }
                                initialRating={ parseFloat(obj.rating) }
                                readonly
                                style={ { padding: '0px 5px' } } />
                            <div className={ classes.Price }> { obj.price } </div>
                        </div>
                        <div className={ classes.Spacing }></div>
                        <Button
                            variant="contained"
                            color="primary"
                            className={ classes.button }
                            endIcon={ <AddShoppingCartIcon /> }
                            href={ obj.url }
                            target="_blank"
                            style={ { marginRight: '2rem' } }
                        >
                            Visit Official Website
                        </Button>
                    </div>
                );
            })
        } else {
            favList = <div className={ classes.Nothing }> You Currently Have Nothing in Your Wishlist! </div>
        }
        return (
            <div className={ classes.Primary }>
                <div className={ classes.MainTitle }>
                    YOUR WISHLIST
                </div>
                { favList }
            </div>
        );
    }
}

export default HeartPage