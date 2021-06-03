import React from "react";
import { Route, Switch } from "react-router-dom";

import "./App.css";

import HomePage from "./pages/home-page/homepage.component";
import ShopPage from "./pages/shop-page/shoppage.component";
import SignInAndSignUp from "./pages/sign-in-and-sign-up-page/sign-in-and-sign-up-page.component";
import Header from "./components/header/header.component";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";

import { connect } from "react-redux";
import { setCurrentUser } from "./components/redux/user/user.actions";

class App extends React.Component {
  unSubScribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;
    this.unSubScribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        /**
         * * if there is document we will get the user ref
         * * if no document there we will create a new document using userAuth and return the userAuth
         */
        const userRef = await createUserProfileDocument(userAuth);

        /**
         * * listening to any change to the snapshot of the userRef and
         * * set the current user accordingly
         */
        userRef.onSnapshot((snapshot) => {
          // this.setState(
          //   {
          //     currentUser: {
          //       id: snapshot.id,
          //       ...snapshot.data(),
          //     },
          //   },
          //   () => {
          //     console.log("current state", this.state);
          //   }
          // );

          setCurrentUser({
            id: snapshot.id,
            ...snapshot.data(),
          });
        });
      } else {
        // ! set current user to null
        setCurrentUser(userAuth);
        // this.setState({ currentUser: userAuth });
      }
    });
  }
  componentWillUnmount() {
    this.unSubScribeFromAuth();
  }
  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/signin" component={SignInAndSignUp} />
        </Switch>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => {
    dispatch(setCurrentUser(user));
  },
});

export default connect(null, mapDispatchToProps)(App);
