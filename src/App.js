import React from "react";
import { Route, Switch } from "react-router-dom";

import "./App.css";

import HomePage from "./pages/home-page/homepage.component";
import ShopPage from "./pages/shop-page/shoppage.component";
import SignInAndSignUp from "./pages/sign-in-and-sign-up-page/sign-in-and-sign-up-page.component";
import Header from "./components/header/header.component";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      currentUser: null,
    };
  }
  unSubScribeFromAuth = null;
  componentDidMount() {
    this.unSubScribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        /**
         * TODO if there is document we will get the user ref
         * * if no document there we will create a new document using userAuth and return the userAuth
         */
        const userRef = await createUserProfileDocument(userAuth);

        /**
         * * listening to any change to the snapshot of the userRef and
         * *set the current user accordingly
         */
        userRef.onSnapshot((snapshot) => {
          this.setState(
            {
              currentUser: {
                id: snapshot.id,
                ...snapshot.data(),
              },
            },
            () => {
              console.log("current state", this.state);
            }
          );
        });
      } else {
        // ! set current user to null
        this.setState({ currentUser: userAuth });
      }
    });
  }
  componentWillUnmount() {
    this.unSubScribeFromAuth();
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
