import React from 'react';
import Message from './Message';

// class MessagesList extends React.Component {
//   render() {
//     const {messagesProp} = this.props;
//     return (
//       <div>
//         {messagesProp.map(message =>
//           <Message key={message.timestamp}
//                    avatarUrl={message.avatarUrl}
//                    name={message.name}
//                    timestamp={message.timestamp.toString()}
//                    text={message.text}/>
//         )}
//       </div>
//     );
//   }
// }

class MessagesList extends React.Component {
  render() {
    const {messages = []} = this.props;
    return (
      <div style={styles.messagesList}>
        {messages.map(message =>
          <Message key={message.timestamp.toString() + message.name} 
                   avatarUrl={message.avatarUrl} 
                   expanded={false} 
                   name={message.name} 
                   timestamp={message.timestamp} 
                   text={message.text} 
          />
        )}
      </div>
    );
  }
}

const styles = {
  messagesList: {
    marginTop: 'auto',
    padding: '20px',
  },
};

export default MessagesList
