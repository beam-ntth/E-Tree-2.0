import React, { Component, Fragment } from 'react';
import { classes } from './SearchPage.module.css';
import * as firebase from 'firebase';

import SearchCount from '../../components/SearchCount/SearchCount';
import SearchList from '../../components/SearchList/SearchList';
import SelectProduct from '../../components/SelectedProduct/SelectedProduct';

firebase.initializeApp({
    apiKey: "AIzaSyBOPeDR45xbW-flNTwBv5XGyEMJstvzSKs",
    authDomain: "earthxhack-2592f.firebaseapp.com",
    databaseURL: "https://earthxhack-2592f.firebaseio.com",
    projectId: "earthxhack-2592f",
    storageBucket: "earthxhack-2592f.appspot.com",
    messagingSenderId: "525979922104",
    appId: "1:525979922104:web:3b37ef7ca18139eb17ce4d",
    measurementId: "G-25E5SPBH71"
  })
  
let db = firebase.firestore();
const clothingGET = db.collection('Category').doc('Clothing');
const clothingCollect = ['Alternative Apparel', 'Boden', 'EcoVibe', 'Pact', 'People Tree', 'Reformation', 'We Are Thought'];
const kitchenGET = db.collection('Category').doc('Household & Kitchen');
const kitchenCollect = ['Bedroom', 'Cleaning', 'Food related'];
const kidsGET = db.collection('Category').doc('Kids');
const kidsCollect = ['Entertainment'];
const officeGET = db.collection('Category').doc('Office');
const officeCollect = ['Note Taking', 'Others', 'Utensils'];
const personalGET = db.collection('Category').doc('Personal Care');
const personalCollect = ['Bath', 'Beauty', 'Body'];
const miscGET = db.collection('Category').doc('Miscellaneous');
const miscCollect = ['Bags'];

class SearchPage extends Component {
    state = {
        queryReturned: [],
        search: true,
        productSelected: false,
        productInfo: {},
        heartPageObjects: []
    }
    
    persistDataHandler = () => {
        localStorage.setItem('hearts', JSON.stringify(this.state.heartPageObjects));
        // localStorage.setItem('carts', JSON.stringify(this.state.cartPageObjects));
    }
    
    addHeartHandler = () => {
        let prevHeart = this.state.heartPageObjects;
        prevHeart.push(this.state.productInfo);
        this.setState({heartPageObjects: prevHeart})
        this.persistDataHandler();
    }

    productSelectHandler = (infoObj) => {
        this.setState({
          sideDrawerOpen: false,
          search: false,
          productSelected: true,
          productInfo: infoObj
        })
      }

    componentDidMount () {
        let keyWord = null;
        const query = new URLSearchParams(this.props.location.search);
        for (let param of query.entries()) {
            keyWord = param; // yields ['start', '5']
        }
        this.setState({
            sideDrawerOpen: false,
            queryKey: keyWord[1],
            productSelected: false,
        });
        this.searchResult();
    }

    searchResult = () => {
        let allResult = [];
        let clothesResult = [];
        clothingCollect.forEach (async (collec, index) => {
          let temp = []
          await (clothingGET.collection(collec).get()).then(item => {
            item.forEach(doc => temp.push(doc.data()));
            temp.forEach((item, index) => {
              try {
                if (item.Keyword.includes(this.state.queryKey)) {
                  clothesResult.push(item);
                }
              } catch {
                console.log(Error);
              }
            })
          });
          if (index === clothingCollect.length-1) {
            allResult.push(...clothesResult);
          } 
        });
    
        let kitchenResult = [];    
        kitchenCollect.forEach( async(collec, index) => {
          let temp = [];
          await (kitchenGET.collection(collec).get()).then(item => {
            item.forEach(doc => temp.push(doc.data()));
            temp.forEach((item) => {
              try {
                if (item.Keyword.includes(this.state.queryKey)) {
                  kitchenResult.push(item);
                }
              } catch {
                console.log(Error);
              }
            })
          });
          if (index === kitchenCollect.length-1) {
            allResult.push(...kitchenResult);
          }
        });
    
        let kidsResult = [];    
        kidsCollect.forEach( async(collec, index) => {
          let temp = [];
          await (kidsGET.collection(collec).get()).then(item => {
            item.forEach(doc => temp.push(doc.data()));
            temp.forEach((item) => {
              try {
                if (item.Keyword.includes(this.state.queryKey)) {
                  kidsResult.push(item);
                }
              } catch {
                console.log(Error);
              }
            })
          });
          if (index === kidsCollect.length-1) {
            allResult.push(...kidsResult);
          }
        });
    
        let officeResult = [];    
        officeCollect.forEach( async(collec, index) => {
          let temp = [];
          await (officeGET.collection(collec).get()).then(item => {
            item.forEach(doc => temp.push(doc.data()));
            temp.forEach((item) => {
              try {
                if (item.Keyword.includes(this.state.queryKey)) {
                  officeResult.push(item);
                }
              } catch {
                console.log(Error);
              }
            })
          });
          if (index === officeCollect.length-1) {
            allResult.push(...officeResult);
          }
        });
    
        let personalResult = [];    
        personalCollect.forEach( async(collec, index) => {
          let temp = [];
          await (personalGET.collection(collec).get()).then(item => {
            item.forEach(doc => temp.push(doc.data()));
            temp.forEach((item) => {
              try {
                if (item.Keyword.includes(this.state.queryKey)) {
                  personalResult.push(item);
                }
              } catch {
                console.log(Error);
              }
            })
          });
          if (index === personalCollect.length-1) {
            allResult.push(...personalResult);
          }
        });
    
        let miscResult = [];    
        miscCollect.forEach( async(collec, index) => {
          let temp = [];
          await (miscGET.collection(collec).get()).then(item => {
            item.forEach(doc => temp.push(doc.data()));
            temp.forEach((item) => {
              try {
                if (item.Keyword.includes(this.state.queryKey)) {
                  miscResult.push(item);
                }
              } catch {
                console.log(Error);
              }
            })
          });
          if (index === miscCollect.length-1) {
            allResult.push(...miscResult);
            this.setState({queryReturned: allResult})
            console.log(allResult);
          }
        });
      }

    render () {
        let searchList;
        if (this.state.search) {
            searchList = (
            <Fragment>
                <SearchCount count={this.state.queryReturned.length} name={this.state.queryKey} />
                {this.state.queryReturned.map(item => {
                return(
                    <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                    <SearchList
                    select={this.productSelectHandler}
                    // addCart={this.addCartHandler}
                    addHeart={this.addHeartHandler}
                    title={item.id} 
                    brand={item.Brand}
                    des={item.Description}
                    price={item.Price}
                    rating={item.Rating}
                    url={item.URL}
                    image={item.images} />
                    </div>
                );
                })}
            </Fragment>
            )
        }

        let selectedItem;
        if (this.state.productSelected) {
            selectedItem = <SelectProduct info={this.state.productInfo} />
            console.log(this.state.productInfo);
        }

        return (
            <Fragment>
                {searchList}
                {selectedItem}
            </Fragment>
        )
    }
}

export default SearchPage;