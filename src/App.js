import React from 'react';
import './App.css';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './components/home/Home';
import About from './components/about/About';
import Products from './components/products/Products';
import Product from './components/products/Product';


function App( props ) {
  return (
      <Router>
          <div className="App">
              <nav>
                  <Link to="/">Home</Link>
                  <Link to="/products">Products</Link>
                  <Link to="/about">About</Link>
              </nav>
              <Switch>
                  <Route exact path="/" component={ Home }/>
                  <Route exact path="/about" component={ About }/>
                  <Route exact path="/products" component={ Products }/>
                  <Route exact path="/product/:id" component={ Product }/>
              </Switch>
          </div>
      </Router>
  );
}

const mapStateToProps = state => {

    return {
        user: state.user,
        toggle: state.toggle
    }
};

export default connect( mapStateToProps )( App );
