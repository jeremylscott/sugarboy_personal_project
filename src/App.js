import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import {Provider} from 'react-redux'
import store from './store'
import Contact from './components/Contact/Contact'
import Contact from './components/Locations/Locations'
import Contact from './components/Menu/Menu'
import Contact from './components/Cart/Cart'
import Contact from './components/Yeast/Yeast'
import Contact from './components/Cake/Cake'
import Contact from './components/Kolaches/Kolaches'
import Contact from './components/Drinks/Drinks'
import Contact from './components/Reports/Reports'


class App extends Component {
  render() {
    return (
        <Provider state={state}/>
          <Router>
            <div>
              <Route exact path='/' component={Home}/>
              <Route path='/contact' component={Contact}/>
              <Route path='/locations' component={Locations}/>
              <Route path='/menu' component={Menu}/>
              <Route path='/cart' component={Cart}/>
              <Route path='/yeast-donuts' component={Yeast}/>
              <Route path='/cake-donuts' component={Cake}/>
              <Route path='/kolaches' component={Kolaches}/>
              <Route path='/drinks' component={Drinks}/>
              <Route path='/reports' component={Reports}/>
            </div>
          </Router>
        <Provider/>
    );
  }
}

export default App;
