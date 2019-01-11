import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import auth0Client from '../Auth/Auth';
import axios from 'axios';

class CreatePortlet extends Component {
  constructor(props) {
    super(props);

    this.state = {
      disabled: false,
      title: '',
      description: ''
    };
  }

  updateDescription(description) {
    this.setState({
      description
    });
  }

  updateTitle(title) {
    this.setState({
      title
    });
  }

  async submit() {
    this.setState({
      disabled: true
    });

    await axios.post('http://localhost:8081', {
      title: this.state.title,
      description: this.state.description
    }, {
      headers: { 'Authorization': `Bearer ${auth0Client.getIdToken()}` }
    });

    this.props.history.push('/');
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="card border-primary">
              <div className="card-header">New Portlet</div>
              <div className="card-body text-left">
                <div className="form-group">
                  <label htmlFor="exampleInputEmail">Title:</label>
                  <input
                    disabled={this.state.disabled}
                    type="text"
                    onBlur={(ev) => {this.updateTitle(ev.target.value)}}
                    className="form-control"
                    placeholder="Give your portlet a title."
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputEmail">Description:</label>
                  <input
                    disabled={this.state.disabled}
                    type="text"
                    onBlur={(ev) => {this.updateDescription(ev.target.value)}}
                    className="form-control"
                    placeholder="Describe the purpose of your portlet."
                  />
                </div>
                <button
                  disabled={this.state.disabled}
                  className="btn btn-primary"
                  onClick={() => {this.submit()}}>
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default withRouter(CreatePortlet);