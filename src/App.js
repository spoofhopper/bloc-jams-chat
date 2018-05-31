import React, { Component } from 'react';
import './App.css';
import * as firebase from 'firebase';
import { Grid, Row, Col, Navbar } from 'react-bootstrap';
import { RoomList } from './components/RoomList';

// Initialize Firebase
var config = {
  apiKey: "AIzaSyAzRz12cw6bSPRnqt7YCxFHeP5YvbYpOYo",
  authDomain: "bloc-jams-chat.firebaseapp.com",
  databaseURL: "https://bloc-jams-chat.firebaseio.com",
  projectId: "bloc-jams-chat",
  storageBucket: "bloc-jams-chat.appspot.com",
  messagingSenderId: "834797910006"
};
firebase.initializeApp(config);

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }


  render() {
    let roomList;
    return (
      <div>
        <RoomList firebase={firebase}/>
      </div>
    );
  };

}


export default App;
