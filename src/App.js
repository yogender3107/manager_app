import React, { Component } from "react";
import { View, Text } from "react-native";
import { Provider } from "react-redux";
import { createStore } from "redux";
import firebase from "firebase";
import reducers from "./reducers";
import LoginForm from "./components/LoginForm";

class App extends Component {
  componentDidMount() {
    firebase.initializeApp({
      apiKey: "AIzaSyCiggdpTMznPXxArI_dujoQFzVIJU9f_S8",
      authDomain: "manager-app-326bd.firebaseapp.com",
      databaseURL: "https://manager-app-326bd.firebaseio.com",
      projectId: "manager-app-326bd",
      storageBucket: "manager-app-326bd.appspot.com",
      messagingSenderId: "745901024193"
    });
    // firebase.auth().onAuthStateChanged(user => {
    //   if (user) {
    //     this.setState({ loggedIn: true });
    //   } else {
    //     this.setState({ loggedIn: false });
    //   }
    // });
  }
  render() {
    return (
      <Provider store={createStore(reducers)}>
        <LoginForm />
      </Provider>
    );
  }
}

export default App;
