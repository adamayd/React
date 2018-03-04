import React from 'react';
import { getFunName } from '../helpers';

class StorePicker extends React.Component {
  // constructor() {
  //   super();
  //   this.goToStore = this.goToStore.bind(this);
  //   console.log('gonna create a component');
  // }
  myInput = React.createRef();

  goToStore = (event) => {
    // Stop the from from submitting
    event.preventDefault();
    // get the text from that input
    const storeName = this.myInput.value.value; 
    // Change the page to /store/whatever-they-entered
    this.props.history.push(`/store/${storeName}`);
  }
  render() {
    return (
      <form className="store-selector" onSubmit={this.goToStore}>
        <h2>Please Enter A Store</h2>
        <input type="text" required placeholder="Store Name" ref={this.myInput} defaultValue={getFunName()} />
        <button type="submit">Visit Store</button>
      </form>
    );
  }  
}

export default StorePicker;