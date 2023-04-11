import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  const [chatLogs, setChatLog] = useState([]); // [ {name: 'John', content: 'Hello'}, {name: 'Mary', content: 'Hi'} ]
  const [chatContent, setChatContent] = useState('');

  const handleChatContent = (event) => {
    setChatContent(event.target.value);
  };

  const handleSubmit = (event) => {
    console.log('handling');
    console.log('log: '+chatContent);
    setChatLog(chatLogs=>[...chatLogs,{name: 'User', content: chatContent, time: new Date().toLocaleTimeString(), role: 'user'}]);
    setChatContent('');

  };

  return (
    <div className="App">
      <div id="chatLog" style={{height:"85vh", border:"1px solid #ccc"}}>
        <ul>
          {chatLogs.map((chat, index) => (
            <li>
              <div>
                <div className="name">{chat.name}</div>
                <div className="content">{chat.content}</div>
                <div className="time">{chat.time}</div>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div id="ChatInput">
        <textarea id="chatInput" onChange={handleChatContent} value={chatContent} />

        <button id="chatButton" onClick={handleSubmit}>Send</button>
      </div>
        
    </div>
  );
}

export default App;
