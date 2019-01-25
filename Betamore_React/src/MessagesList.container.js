import createContainer from './createContainer';
import database from './database';
import MessagesList from './MessagesList';

const getData = ({}, setData) => {
    console.log('hi')
    setData({messages:[]});
    database.messages.listen('general', (message) => {
        setData((data) => ({
            messages: (data.messages || []).concat(message),
        }))
    });
};

export default createContainer(getData)(MessagesList);