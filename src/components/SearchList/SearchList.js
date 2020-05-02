import React from 'react';
import classes from './SearchList.module.css';
import Ratings from 'react-rating';
import { MdStar, MdStarBorder } from 'react-icons/md';
import { withRouter } from 'react-router-dom';

const SearchList = (props) => {
    const passingObj = {image: props.image, title: props.title, brand: props.brand, des: props.des, price: props.price, rating: props.rating, 
        url: props.url, select: props.select, addHeart: props.addHeart, addCart: props.addCart};
    
    return (
        <div className={classes.Listing}>
            <div className={classes.ImgSec} 
            onClick={props.select.bind(this, passingObj)}><img src={props.image[0]} alt="A pic here"/>
            </div>
            <div className={classes.Rhs}>
                <div className={classes.Title} 
                onClick={props.select.bind(this, passingObj)}> {props.title}
                </div>
                <div className={classes.Brand}> {props.brand} </div>
                <Ratings 
                emptySymbol={<MdStarBorder color="#ffcc00" size={30}></MdStarBorder>} 
                fullSymbol={<MdStar color="#ffcc00" size={30}></MdStar>} 
                initialRating={parseFloat(props.rating)} 
                readonly
                style={{padding: '0px 5px'}} />
                <div className={classes.Price}> {props.price} </div>
            </div>
            
        </div>
    );
};

export default withRouter(SearchList);

//print("Year " + (year+(month+start_month)/12) + ", " + ((month+start_month)%12) + " balance: " + balance) 