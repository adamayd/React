import React, { Component } from 'react';
import axios from 'axios';

class Portlet extends Component {
  state = {portlet: null};

  async componentDidMount() {
    const { match: { params } } = this.props;
    const portlet = (await axios.get(`http://localhost:8081/${params.portletId}`)).data;
    this.setState({
      portlet
    });
  }

  render() {
    const { portlet } = this.state;
    if (portlet === null) return <p>Loading...</p>;
    return (
      <div className="container">
        <div className="row">
          <div className="jumbotron col-12">
            <h1 className="display-3">{portlet.title}</h1> 
            <p className="lead">{portlet.description}</p>
            <hr className="my-4" />
            <p>Messages</p>
              {
                portlet.messages.map((message, idx) => (
                  <p className="lead" key={idx}>{message.message}</p>
                ))
              }
          </div>
        </div>
      </div>
    )
  }
}

export default Portlet;