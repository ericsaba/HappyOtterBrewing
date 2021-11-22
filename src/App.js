import logo from './logo.svg';
import './App.css';
import Preloader from './components/preloader'
import FooterArea from './components/footerArea'
import ScrollUp from './components/scrollUp'

import Homepage from './components/homepage'
import BeersPage from './components/beersPage'
import MerchPage from './components/merchPage'
import DonatePage from './components/donatePage'
import PageNotFound from './components/pageNotFound'

import React from 'react';
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react'
import { Link, Route, Switch, Redirect } from 'react-router-dom'

function App() {
  return (
    
    <div className="App">
      {/*<Preloader />*/}
      <header>
        <div className="header-area">
        <div className="main-header header-sticky">
          <div className="container-fluid">
            <div className="menu-wrapper d-flex align-items-center justify-content-between">
              <div className="left-content d-flex align-items-center">
                <div className="logo">
                  <a href="index.html"><img src="assets/img/logo/logo.png" alt="" /></a>
                </div>
                {/* Main-menu */}
                <div className="main-menu d-none d-lg-block">
                  <nav>
                    <ul id="navigation">            
                      <li> <Link to="/">Home</Link> </li>
                      <li> <Link to="/beers">Our Beers</Link> </li>
                      <li> <Link to="/merch">Merch</Link> </li>
                      <li> <a>Save the Otters</a>
                          <ul className="submenu">
                              <li><a href="https://donate.edf.org/give/371702/" target="_blank" rel="noopener noreferrer" >Enviornmental Defense Fund</a></li>
                              <li><a href="https://act.nrdc.org/donate/donate-monthly" target="_blank" rel="noopener noreferrer" >National Resources Defense Council</a></li>
                              <li><a href="https://preserve.nature.org/page/80429/donate/1" target="_blank" rel="noopener noreferrer" >The Nature Conservancy</a></li>
                          </ul>
                      </li>                                                                              
                      <li><a href="mailto:happyotterbrewing@gmail.com">Contact</a></li>
                    </ul>
                  </nav>
                </div>
              </div>     
            </div>
            {/* Mobile Menu */}
            <div className="col-12">
              <div className="mobile_menu d-block d-lg-none" />

            </div>
          </div>
        </div>
      </div>
      </header>
      <main>
        <Switch>
          <Route exact path="/" component={Homepage}/>
          <Route path="/beers" component={BeersPage}/>
          <Route path="/merch" component={MerchPage}/>
          <Route path="/pagenotfound" component={PageNotFound}/>
          <Redirect to="/pagenotfound"/>
        </Switch>
      </main>
      <footer>
        <FooterArea></FooterArea>
      </footer>
      <ScrollUp></ScrollUp>
      {/*<AmplifySignOut/>*/}
    </div>
  );
}

export default (App);
