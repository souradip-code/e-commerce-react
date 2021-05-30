import React from "react";
import { Route, Switch } from "react-router-dom";

import "./App.css";

import HomePage from "./pages/home-page/homepage.component";
import ShopPage from "./pages/shop-page/shoppage.component";
import SignInAndSignUp from "./pages/sign-in-and-sign-up-page/sign-in-and-sign-up-page.component";
import Header from "./components/header/header.component";
import { auth } from "./firebase/firebase.utils";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      currentUser: null
    }
  }
  unSubScribeFromAuth = null
  componentDidMount() {
    this.unSubScribeFromAuth = auth.onAuthStateChanged(user=>{
      this.setState({currentUser: user})
      console.log('user',user);
    })
  }
  componentWillUnmount() {
    this.unSubScribeFromAuth()
  }
  render() {
    return (
      <div>
        <Header isCurrentUser={this.state.currentUser} />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/signin" component={SignInAndSignUp} />
        </Switch>
      </div>
    );
  }
}

export default App;
