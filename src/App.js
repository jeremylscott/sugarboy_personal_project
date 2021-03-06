import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import {Provider} from 'react-redux'
import store from './store'
import HomePic from './components/HomePic/HomePic'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import Cart from './components/Cart/Cart'
import Yeast from './components/Yeast/Yeast'
import Cake from './components/Cake/Cake'
import Kolaches from './components/Kolaches/Kolaches'
import Drinks from './components/Drinks/Drinks'
import Reports from './components/Reports/Reports'
import Admin from './components/Admin/Admin'
import ProductInfo from './components/ProductInfo/ProductInfo'
import './App.scss'


class App extends Component {
  render() {
    return (
        <Provider store={store}>
          <Router>
            <div>
              <Route exact path='/' component={HomePic}/>
              <Route exact path='/about' component={About}/>
              <Route path='/contact' component={Contact}/>
              <Route path='/cart' component={Cart}/>
              <Route path='/yeast-donuts' component={Yeast}/>
              <Route path='/cake-donuts' component={Cake}/>
              <Route path='/kolaches' component={Kolaches}/>
              <Route path='/drinks' component={Drinks}/>
              <Route path='/reports' component={Reports}/>
              <Route path='/admin' component={Admin}/>
              <Route path='/product-info/:id' component={ProductInfo}/>
            </div>
          </Router>
        </Provider>
    );
  }
}

export default App;
