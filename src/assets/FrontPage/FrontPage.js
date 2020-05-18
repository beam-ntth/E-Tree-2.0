import React, { Component } from 'react';
import classes from './FrontPage.module.css';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'

class FrontPage extends Component {
    render() {
        return (
            <div className={ classes.Primary }>
                <div className={ classes.CatTitle }> Popular in Kitchen Department </div>
                <div className={ classes.Car2 }>
                    <div className={ classes.cards }>
                        <div className={ classes.prodTitle }> Biodegradable Cups </div>
                        <div className={ classes.cardImg }><img src={ this.props.images[0] } alt="A pic here" /></div>
                    </div>
                    <div className={ classes.cards }>
                        <div className={ classes.prodTitle }> Silicon Reusable Drinking Straws </div>
                        <div className={ classes.cardImg }><img src={ this.props.images[1] } alt="A pic here" /></div>
                    </div>
                    <div className={ classes.cards }>
                        <div className={ classes.prodTitle }> Silicone Reusable Food Storage Bag </div>
                        <div className={ classes.cardImg }><img src={ this.props.images[2] } alt="A pic here" /></div>
                    </div>
                    <div className={ classes.cards }>
                        <div className={ classes.prodTitle }> Paperless Towels </div>
                        <div className={ classes.cardImg }><img src={ this.props.images[3] } alt="A pic here" /></div>
                    </div>
                </div>
                <div className={ classes.CatTitle }> Popular in Clothing Department </div>
                <div className={ classes.Car2 }>
                    <div className={ classes.cards }>
                        <div className={ classes.prodTitle }> Cotton Modal Interlock Pullover Sweatshirt </div>
                        <div className={ classes.cardImg }><img src={ this.props.images[4] } alt="A pic here" /></div>
                    </div>
                    <div className={ classes.cards }>
                        <div className={ classes.prodTitle }> Mollusk Cotton Teddy Sweater </div>
                        <div className={ classes.cardImg }><img src={ this.props.images[5] } alt="A pic here" /></div>
                    </div>
                    <div className={ classes.cards }>
                        <div className={ classes.prodTitle }> Albert Vest in Grey </div>
                        <div className={ classes.cardImg }><img src={ this.props.images[6] } alt="A pic here" /></div>
                    </div>
                    <div className={ classes.cards }>
                        <div className={ classes.prodTitle }> Krysta Block Printed Top </div>
                        <div className={ classes.cardImg }><img src={ this.props.images[7] } alt="A pic here" /></div>
                    </div>
                </div>
                <div className={ classes.CatTitle }>
                    This event will not be possible without our generous sponsors
                </div>
                <div className={ classes.adjuster }>
                    <div className={ classes.Car1 }>
                        <Carousel infiniteLoop={ true } width="100%" showArrows={ true } autoPlay={ true } showStatus={ false } showThumbs={ false }>
                            <div >
                                <img src="./smurfitkappa.jpeg" alt="SmurfitKappa" />
                            </div>
                            <div>
                                <img src="./nationalgeo.jpg" alt="NationalGeography" />
                            </div>
                            <div>
                                <img src="./statefarm.png" alt="Statefarm" />
                            </div>
                            <div>
                                <img src="./50years.png" alt="Statefarm" />
                            </div>
                            <div>
                                <img src="./icreate.png" alt="Statefarm" />
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        );
    }
}

export default FrontPage;