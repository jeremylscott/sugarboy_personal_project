import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import {Provider} from 'react-redux'
import store from './store'
import Home from './components/Home/Home'
import Contact from './components/Contact/Contact'
import Menu from './components/Menu/Menu'
import Cart from './components/Cart/Cart'
import Yeast from './components/Yeast/Yeast'
import Cake from './components/Cake/Cake'
import Kolaches from './components/Kolaches/Kolaches'
import Drinks from './components/Drinks/Drinks'
import Reports from './components/Reports/Reports'


class App extends Component {
  render() {
    return (
        <Provider store={store}>
          <Router>
            <div>
              <Route exact path='/' component={Home}/>
              <Route path='/contact' component={Contact}/>
              <Route path='/menu' component={Menu}/>
              <Route path='/cart' component={Cart}/>
              <Route path='/yeast-donuts' component={Yeast}/>
              <Route path='/cake-donuts' component={Cake}/>
              <Route path='/kolaches' component={Kolaches}/>
              <Route path='/drinks' component={Drinks}/>
              <Route path='/reports' component={Reports}/>
              <Route path='/register' component={Register}/>
            </div>
          </Router>
        </Provider>
    );
  }
}

export default App;
