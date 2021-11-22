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
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';

function App() {
  return (
    
    <div className="App">
      {/*<Preloader />*/}
      <header>
        <div className="header-area">
        <div className="main-header header-sticky">
        <Navbar bg="light" expand="lg">
          <Container>
            <Navbar.Brand>
              <Link to="/"><img className="d-inline-block align-top" height="70px" width="auto" src="assets/img/logo/logo.png" alt="" /></Link>
            </Navbar.Brand>
             <Navbar.Toggle aria-controls="basic-navbar-nav" />
             <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                  <Nav.Link><Link to="/">Home</Link></Nav.Link>
                  <Nav.Link><Link to="/beers">Our Beers</Link></Nav.Link>
                  <Nav.Link><Link to="/merch">Merch</Link></Nav.Link>
                  <NavDropdown title="Save the Otters" id="basic-nav-dropdown">
                    <NavDropdown.Item href="https://donate.edf.org/give/371702/" target="_blank" rel="noopener noreferrer" >Enviornmental Defense Fund</NavDropdown.Item>
                    <NavDropdown.Item href="https://act.nrdc.org/donate/donate-monthly" target="_blank" rel="noopener noreferrer" >National Resources Defense Council</NavDropdown.Item>
                    <NavDropdown.Item href="https://preserve.nature.org/page/80429/donate/1" target="_blank" rel="noopener noreferrer" >The Nature Conservancy</NavDropdown.Item>
                  </NavDropdown>
                  <Nav.Link href="mailto:happyotterbrewing@gmail.com">Contact</Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
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
