import React from 'react';

const createContainer = (getData) => (WrappedComponent) => {
  class Container extends React.Component {
    constructor(props) {
      super(props);
      this.state = {};
      this.setData = this.setData.bind(this);
    }

    componentDidMount() {
        console.log('cdm')
      getData(this.props, this.setData);
    }

    componentDidUpdate(prevProps) {
      if (this.props.currentRoom !== prevProps.currentRoom) {
        getData(this.props, this.setData);
      }
    }

    setData(data) {
        console.log('setData', data)
      this.setState(data);
    }

    render() {
        console.log(this.state, this.props)
      return (
        <WrappedComponent {...this.state} {...this.props} />
      )
    }
  };

  Container.displayName = `Container(${WrappedComponent.displayName || WrappedComponent.name || 'Component'})`;
  return Container;
};

export default createContainer;