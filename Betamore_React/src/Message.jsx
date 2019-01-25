import React from 'react';


// class Message extends React.Component {
//   render () {
//     const avatarUrl = this.props.avatarUrl;
//     const name = this.props.name;
//     const timestamp = this.props.timestamp;
//     const text = this.props.text;
//     return (
//         <div>
//           <img src={avatarUrl} alt={'Avatar for ' + name} /><br/>
//           <span style={styles.span}>{name}</span><br/>
//           <span>{timestamp}</span><br/>
//           <p>{text}</p>
//         </div>
//     );
//   }
// }

// const styles = {
//   span: {
//     fontWeight: 700
//   }
// }

class Message extends React.Component {
  render () {
    const {avatarUrl, expanded, name, text, timestamp} = this.props;
    const time = timestamp.toTimeString().split(' ')[0];
    return (
      <div style={styles.container}>
        {expanded &&
          <img src={avatarUrl} style={styles.image} alt="Profile Icon" />
        }
        <div style={styles.rightSide}>
          {! expanded &&
            <span style={styles.timeMerged}>
            {time}
            </span>
          }
          <span style={styles.name}>
            {name}
          </span>
          {expanded &&
            <span style={styles.time}>
              {time}
            </span>
          }
          <p style={expanded ? styles.text : styles.textNotExpanded}>
            {text}
          </p>
        </div>
      </div>
    );
  }
}

const styles = {
  container: {
    marginBottom: '10px',
  },
  image: {
    height: '36px',
    marginRight: '10px',
    width: '36px',
  },
  name: {
    fontWeight: 'bold',
    marginRight: '10px',
  },
  rightSide: {
    display: 'inline-block',
  },
  text: {
    margin: 0,
  },
  time: {
    color: 'grey',
    fontSize: '10px',
  },
  textNotExpanded: {
    display: 'inline',
  },
  timeNotExpanded: {
    color: 'grey',
    fontSize: '12px',
    marginRight: '10px',
  },
};    

export default Message;
