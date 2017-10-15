import React from 'react';

import database from './database';

const sendMessage = (event) => {
    event.preventDefault();
    console.log(event);
}

class Editor extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};
        this.sendMessage = this.sendMessage.bind(this);
        this.setValue = this.setValue.bind(this);
    }

    sendMessage(event) {
        event.preventDefault();
        const form = event.target;

        const text = form.text.value;
        const timestamp = new Date();
        const name = 'Some Name';
        const avatarUrl = 'some_url.png';
        
        const {addMessage} = this.props;
        // addMessage({avatarUrl: avatarUrl, name: name, text: text, timestamp: timestamp});

        database.messages.add('general', {avatarUrl: avatarUrl, name: name, text: text, timestamp: timestamp})

        this.setState({value: ''});
    }

    setValue(event) {
        const input = event.target;
        const value = input.value;
        this.setState({value: value});
    }

    render () {
        const {value} = this.state;
        return (
            <form style={styles.editor} onSubmit={this.sendMessage}>
                <input autoComplete="off" 
                       style={styles.input} 
                       name="text" 
                       type="text" 
                       value={this.state.value} 
                       onChange={this.setValue}
                />
            </form>
        );
    }
}

const styles = {
  editor: {
    padding: '0 20px',
    marginBottom: '20px',
  },
  input: {
    padding: '10px',
    width: 'calc(100% - 20px)',
  },
};

export default Editor;