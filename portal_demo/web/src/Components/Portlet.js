import React, { Component } from 'react';
import CreateMessage from './CreateMessage';
import axios from 'axios';
import auth0Client from '../Auth/Auth';

class Portlet extends Component {
  constructor(props) {
    super(props);
    this.state = {
      portlet: null
    };

    this.createMessage = this.createMessage.bind(this);
  }

  async componentDidMount() {
    await this.refreshPortlet();
  }

  async refreshPortlet() {
    const { match: { params } } = this.props;
    const portlet = (await axios.get(`http://localhost:8081/${params.portletId}`)).data;
    console.log(portlet)
    this.setState({
      portlet
    });
  }

  async createMessage(message) {
    await axios.post(`http://localhost:8081/message/${this.state.portlet.id}`, {
      message
    }, {
      headers: { 'Authorization': `Bearer ${auth0Client.getIdToken()}`}
    });
    await this.refreshPortlet();
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
            <CreateMessage portletId={portlet.id} createMessage={this.createMessage} />
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