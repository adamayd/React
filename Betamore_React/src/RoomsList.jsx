import React from 'react';
import Room from './Room';


// class RoomsList extends React.Component {
//   render() {
//     const {roomName} = this.props;
//     return(
//       <div>
//         {roomName.map(room =>
//           <Room key={room.roomName} roomName={room.roomName} />
//         )}
//       </div>
//     );
//   }
// }

class RoomsList extends React.Component {
  render() {
    const {rooms} = this.props;
    return (
      <div style={styles.roomsList}>
        {rooms.map(room =>
          <Room key={room.name} selected={true} name={room.name} />
        )}
      </div>
    );
  }
}

const styles = {
  roomsList: {
    background: 'lightgreen',
    height: 'calc(100% - 40px)',
    padding: '20px',
  },
};

export default RoomsList;
