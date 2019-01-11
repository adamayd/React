import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class Portlets extends Component {
  state = {};

  async componentDidMount() {
    const portlets = (await axios.get('http://localhost:8081/')).data;
    this.setState({
      portlets,
    });
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          {this.state.portlets === null && <p>Loading portlets...</p>}
          {
            this.state.portlets && this.state.portlets.map(portlet => (
              <div key={portlet.id} className="col-sm-12 col-md-4 col-lg-3">
                <Link to={`/portlet/${portlet.id}`}>
                  <div className="card text-white bg-success mb-3">
                    <div className="card-header">Messages: {portlet.messages}</div>
                    <div className="card-body">
                      <h4 className="card-title">{portlet.title}</h4>
                      <p className="card-text">{portlet.description}</p>
                    </div>
                  </div>
                </Link>
              </div>
            ))
          }
        </div>
      </div>
    )
  }
}

export default Portlets;
