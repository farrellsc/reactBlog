import React, { Component } from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

import Header from '../components/Header';
import Footer from '../components/Footer';
import HomeContainer from './HomeContainer';
import AboutContainer from './AboutContainer';
import BlogContainer from './BlogContainer';
import logo from '../assets/logo.svg';


class App extends Component {
  render() {
    return (
      <div>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous" />
        <link rel="stylesheet" href="//cdn.jsdelivr.net/npm/semantic-ui@2.4.1/dist/semantic.min.css"/>
        <Header active="home"/>
        <BrowserRouter>
          <Switch>
            <Route exact path='/' component={ HomeContainer } />
            <Route exact path='/about' component={ AboutContainer } />
            <Route exact path='/blog' component={ BlogContainer } />
          </Switch>
        </BrowserRouter>
        <Footer />
      </div>
    );
  }
}

export default App;