import React, { Component, Fragment } from 'react';
import { withRouter } from 'react-router-dom';
import auth0Client from '../Auth/Auth';

class CreateMessage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: "",
    };
  }

  updateMessage(message) {
    this.setState({
      message
    });
  }

  submit() {
    this.props.createMessage(this.state.message);

    this.setState({
      message: ''
    });
  }

  render() {
    if (!auth0Client.isAuthenticated()) return null;
    return (
      <Fragment>
        <div className="form-group text-center">
          <label htmlFor="exampleInputEmail">Message:</label>
          <input
            type="text"
            onChange={(ev) => {this.updateMessage(ev.target.value)}}
            className="form-control"
            placeholder="Leave a message."
            value={this.state.message}
          />
        </div>
        <button
          className="btn btn-primary"
          onClick={() => {this.submit()}}>
          Submit
        </button>
        <hr className="my-4" />
      </Fragment>
    )
  }
}

export default withRouter(CreateMessage);