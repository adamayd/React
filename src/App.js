import React, { Component } from 'react';
// import Message from './Message';
import MessagesList from './MessagesList.container';
import RoomsList from './RoomsList';
import './App.css';
import Editor from './Editor';
// var time = new Date().toTimeString(' ');
// const messages = [
//   {avatarUrl: './img/smiles.jpeg', name: 'Adam.JSON', timestamp: new Date(2017, 9, 1), text: 'This class Rocks'},
//   {avatarUrl: './img/buffalo.jpeg', name: 'Bob', timestamp: new Date(2017, 9, 2), text: 'Yeah I Know'},
//   {avatarUrl: './img/smiles.jpeg', name: 'Adam.JSON', timestamp: new Date(2017, 9 , 3), text: 'Learning so much'}
// ];

const rooms = [
  {name: 'General'},
  {name: 'React Class'},
  {name: 'Javascript Class'}
];

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <Message avatarUrl="https://cms-assets.tutsplus.com/uploads/users/30/posts/25489/image/pac-404.png" name="Adam.JSON" timestamp={time} text="Adam.JSON is now logged on" />
//         <MessagesList messagesProp={messages}/>
//         <RoomsList roomName={roomsList}/>
//     </div>
//     );
//   }
// }

class App extends Component {
  constructor(props) {
    super(props);
    // this.state = {messages: messages};
    this.addMessage = this.addMessage.bind(this);
  }

  addMessage(newMessage) {
    const currentMessages = this.state.messages;
    const currentPlusNewMessages = currentMessages.concat(newMessage);
    this.setState({messages: currentPlusNewMessages});
  }

  render() {
    // const {messages} = this.state;

    return (
      <div style={styles.app}>
        <div style={styles.rooms}>
          <RoomsList rooms={rooms} />
        </div>
        <div style={styles.messages}>
          <MessagesList />
          <Editor addMessage={this.addMessage} />
        </div>
      </div>
    );
  }
}

const styles = {
  app: {
    display: 'flex',
    height: '100%',
  },
  messages: {
    display: 'flex',
    flex: '0 0 80%',
    flexDirection: 'column',
  },
  rooms: {
    flex: '0 0 20%',
  },
};


export default App;
