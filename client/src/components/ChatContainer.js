import { useEffect } from 'react';
import ChatList from './ChatList';
import ChatForm from './ChatForm';
import { useChat } from '../context/ChatContext';

import { init, subscribeChat } from '../socketApi';

function ChatContainer() {
  const { setMessages } = useChat();

  useEffect(() => {
    init();
    subscribeChat((message) => {
      setMessages(prevState => [...prevState, { message }])
    });
  }, []);

  return (
    <div className='App'>
        <ChatList />
        <ChatForm />
    </div>
  )
}

export default ChatContainer