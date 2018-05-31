import React, { Component } from 'react';
import { Col, Navbar, DropdownButton, MenuItem, FormGroup, InputGroup, FormControl, Button } from 'react-bootstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

export class RoomList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      rooms: []
    };
    this.roomsRef = this.props.firebase.database().ref('rooms');
  }

  componentDidMount() {
    this.roomsRef.on('child_added', snapshot => {
      const room = snapshot.val();
      room.key = snapshot.key;
      this.setState({ rooms: this.state.rooms.concat( room ) });
    });
  }

  render() {

    const roomList = this.state.rooms.map((room) =>
      <li key={room.key}>{room.name}</li>
    );

    return(
      <ul>{roomList}</ul>
    );
  }

}
