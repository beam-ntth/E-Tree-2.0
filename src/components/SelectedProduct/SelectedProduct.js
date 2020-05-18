import React from 'react';
import classes from './SelectedProduct.module.css';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { withRouter } from 'react-router-dom';

import Ratings from 'react-rating';
import { MdStar, MdStarBorder } from 'react-icons/md';
import Button from '@material-ui/core/Button';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';


const SelectedProduct = (props) => {
    return (
        <div className={ classes.Primary }>
            <div className={ classes.LHS }>
                <Carousel infiniteLoop={ true } showArrows={ true } autoPlay={ true } showStatus={ false }>
                    { props.info.image.map(imglink => {
                        return (
                            <div>
                                <img src={ imglink } alt="A pic here" />
                            </div>
                        );
                    }) }
                </Carousel>
            </div>
            {/* Right hand side of the screen */ }
            <div className={ classes.RHS }>
                <div className={ classes.Title }> { props.info.title } </div>
                <div className={ classes.Brand }> { props.info.brand } </div>
                <Ratings
                    emptySymbol={ <MdStarBorder color="#ffcc00" size={ 30 }></MdStarBorder> }
                    fullSymbol={ <MdStar color="#ffcc00" size={ 30 }></MdStar> }
                    initialRating={ parseFloat(props.info.rating) }
                    readonly
                    style={ { padding: '0px 5px' } } />
                <div className={ classes.Des }>
                    <ul>
                        <li> { props.info.des } </li>
                    </ul>
                </div>
                <div className={ classes.Price }>Price: { props.info.price } </div>
                <Button
                    variant="contained"
                    color="primary"
                    className={ classes.button }
                    endIcon={ <AddShoppingCartIcon /> }
                    href={ props.info.url }
                    target="_blank"
                >
                    Visit Official Website
                </Button>

                <Button
                    variant="contained"
                    color="secondary"
                    className={ classes.button }
                    endIcon={ <FavoriteBorderOutlinedIcon /> }
                    onClick={ props.info.addHeart }
                >
                    Add to WishList
                </Button>
            </div>
        </div>
    );
};

export default withRouter(SelectedProduct);