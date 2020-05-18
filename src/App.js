import React, { Component } from 'react';
import classes from './App.module.css';
import * as images from './assets/Images/Images';

import { Route, Switch } from 'react-router-dom';

import Toolbar from './components/Toolbar/Toolbar';
import SideDrawer from './components/SideDrawer/SideDrawer';
import BackDrop from './components/Backdrop/Backdrop';
import SearchPage from './assets/SearchPage/SearchPage';
import HeartPage from './assets/HeartPage/HeartPage';
import FrontPage from './assets/FrontPage/FrontPage';
// import CartPage from './assets/CartPage/CartPage';

// Side Drawer Pages
import KitchenPage from './components/KitchenPage/KitchenPage';
import ClothesPage from './components/ClothesPage/ClothesPage';
import KidsPage from './components/KidsPage/KidsPage';
import OfficePage from './components/OfficePage/OfficePage';
import PersonalPage from './components/PersonalPage/PersonalPage';
import MiscPage from './components/MiscPage/MiscPage';

// let storage = firebase.storage();

class App extends Component {
  state = {
    sideDrawerOpen: false,
    search: false,
    productSelected: false,
    queryKey: "",
    queryReturned: [],
    productInfo: {
      image: [],
      title: "",
      brand: "",
      des: "",
      price: "",
      rating: "",
      url: "",
    },
    heartPageObjects: [],
    // cartPageObjects: []
  }

  drawerToggleClickHandler = () => {
    this.setState((prevState) => {
      return { sideDrawerOpen: !(prevState.sideDrawerOpen) };
    })
  };

  backdropClickHandler = () => {
    this.setState({ sideDrawerOpen: false });
  }

  render() {
    /* Sidebar Config */
    let backdrop;
    if (this.state.sideDrawerOpen) {
      backdrop = <BackDrop click={ this.backdropClickHandler } />;
    }

    return (
      <div className={ classes.App }>
        <Toolbar
          drawerClickHandler={ this.drawerToggleClickHandler }
          // isSearch={this.searchClickHandler}
          clickCart={ this.cartPageClickHandler } />
        <SideDrawer
          show={ this.state.sideDrawerOpen }
          clickHide={ this.backdropClickHandler }
        />
        { backdrop }
        {/* {searchCountBar} */ }
        <main className={ classes.Main }>
          <Switch>
            <Route path='/favorite' exact component={ HeartPage } />
            <Route path='/kitchen' exact render={ () => <KitchenPage images={ images.kitchenPage } /> } />
            <Route path='/clothes' exact render={ () => <ClothesPage images={ images.clothesPage } /> } />
            <Route path='/kids' exact render={ () => <KidsPage images={ images.kidsPage } /> } />
            <Route path='/office' exact render={ () => <OfficePage images={ images.officePage } /> } />
            <Route path='/personal' exact render={ () => <PersonalPage images={ images.personalPage } /> } />
            <Route path='/misc' exact render={ () => <MiscPage images={ images.miscPage } /> } />
            <Route path='/search' exact component={ SearchPage } />
            <Route path='/' exact render={ () => <FrontPage images={ images.frontPage } /> } />
          </Switch>
        </main>
      </div>
    );
  }
}

export default App;