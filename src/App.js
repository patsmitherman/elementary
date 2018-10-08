import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loggedInAction } from './actions/loggedinAction';
import { logoutAction } from './actions/logoutAction';
import Auth from './auth/auth.js';
import history from './history';

import {
  Router,
  Route,
  Link
} from 'react-router-dom';

import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem 
} from 'reactstrap';

import Home from './components/home/home';
import Restaurants from './components/restaurant/restaurants';
import Callback from './components/callback';
import LoginButton from './components/loginButton/loginButton';

import './App.css';

const auth = new Auth();

class App extends Component {

  login = (event) => {
    auth.login();
  }

  logout = (event) => {
    auth.logout();
    this.props.logoutAction();
  }

  handleAuthentication = (nextState, replace) => {
    if (/access_token|id_token|error/.test(nextState.location.hash)) {
      auth.handleAuthentication();
      if (auth.isAuthenticated()) {
        this.props.loggedInAction();
      }
    }
  }

  render() {
    let isAuthed = this.props.authReducer.isAuthed;

    return (
      <div className="App">
        

        <Router history={history}>
          <React.Fragment>
            <Navbar color="light" light expand="md">
              <NavbarBrand href="/">Elementary</NavbarBrand>
              <Nav className="ml-auto" navbar>
                  <NavItem>
                    <Link to="/" className="nav-link">Home</Link>
                  </NavItem>
                  <NavItem>
                    <Link to="/restaurants" className="nav-link">Restaurants</Link>
                  </NavItem>
                  <NavItem>
                    <LoginButton isAuthed={isAuthed} loginFunc={this.login} logoutFunc={this.logout} />
                  </NavItem>
              </Nav>
            </Navbar>
          
            <Route exact path="/" component={Home}/>
            <Route path="/restaurants" component={Restaurants}/>
            <Route path="/callback" render={(props) => {
                this.handleAuthentication(props);
                return <Callback {...props} /> 
              }}
            />
          </React.Fragment>
        </Router>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    ...state
  }
}

const mapDispatchToProps = dispatch => ({
  loggedInAction: () => dispatch(loggedInAction()),
  logoutAction: () => dispatch(logoutAction())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);