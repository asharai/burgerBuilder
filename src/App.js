import React, { Component } from 'react';

import styles from './App.css';
import Layout from './hoc/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';
import Checkout from "./containers/Checkout/Checkout";
import {BrowserRouter} from "react-router-dom";
import {Route,Switch} from "react-router-dom";

class App extends Component {



  render() {
    return (
        <BrowserRouter >
      <div className={styles.app}>
      <Layout>
      <Switch>
        <Route path='/' exact component={BurgerBuilder}/>
        <Route path='/checkout' component={Checkout}/>
      </Switch>

      {/*<BurgerBuilder/>*/}
      {/*<Checkout/>*/}
      </Layout>
      </div>
        </BrowserRouter>
    );
  }
}

export default App;
