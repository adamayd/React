import React from 'react';


class Room extends React.Component {
  render() {
    const name = this.props.name;
    const currentRoom = this.props.selected;
    return (
      <div>
        {currentRoom ? 
        <p style={styles.selected}>{name}</p> :
        <p>{name}</p>}
      </div>
    );
  }
}

const styles = {
  selected: {
    fontWeight: 'bold',
  }
};
export default Room;
