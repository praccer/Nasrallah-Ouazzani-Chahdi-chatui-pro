import React, { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addMessage } from '../store/slices/messagesSlice';
import responsesData from '../data/responses.json';

const Chat = () => {
  const [inputText, setInputText] = useState("");
  const dispatch = useDispatch();
  const messages = useSelector((state) => state.messages);
  const darkMode = useSelector((state) => state.settings.darkMode);
  const scrollRef = useRef(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = () => {
    if (inputText.trim() === "") return;

    dispatch(addMessage({
      id: Date.now(),
      text: inputText,
      sender: 'agent',
      timestamp: new Date().toLocaleTimeString()
    }));

    const userText = inputText.toLowerCase();
    setInputText("");

    setTimeout(() => {
      const found = responsesData.responses.find(item => 
        item.triggers.some(t => userText.includes(t))
      );

      const reply = found 
        ? found.message 
        : responsesData.defaultResponses[Math.floor(Math.random() * responsesData.defaultResponses.length)];

      dispatch(addMessage({
        id: Date.now() + 1,
        text: reply,
        sender: 'ARIA',
        timestamp: new Date().toLocaleTimeString()
      }));
    }, 1200); 
  };

  return (
    <div className="content">
      <div className="page-container" style={{ maxWidth: '600px' }}>
        <h2>ARIA Medical Chat</h2>
        
        {/* CHAT BOX */}
        <div 
          ref={scrollRef}
          style={{ 
            height: '450px', 
            overflowY: 'auto', 
            backgroundColor: darkMode ? '#1a1a1a' : '#fff',
            border: '1px solid #444',
            borderRadius: '12px',
            padding: '20px',
            display: 'flex',
            flexDirection: 'column',
            gap: '15px'
          }}
        >
          {messages.map(m => (
            <div 
              key={m.id} 
              style={{ 
                alignSelf: m.sender === 'agent' ? 'flex-end' : 'flex-start',
                maxWidth: '80% '
              }}
            >
              <div style={{ 
                padding: '12px 16px', 
                borderRadius: '15px', 
                fontSize: '0.95rem',
                backgroundColor: m.sender === 'agent' ? '#007bff' : '#333',
                color: '#fff',
                borderBottomRightRadius: m.sender === 'agent' ? '2px' : '15px',
                borderBottomLeftRadius: m.sender === 'agent' ? '15px' : '2px'
              }}>
                {m.text}
              </div>
              <small style={{ fontSize: '0.7rem', opacity: 0.6, display: 'block', marginTop: '4px', textAlign: m.sender === 'agent' ? 'right' : 'left' }}>
                {m.sender} • {m.timestamp}
              </small>
            </div>
          ))}
        </div>

       
        <div style={{ display: 'flex', gap: '10px', marginTop: '15px' }}>
          <input 
            style={{ flex: 1, padding: '12px', borderRadius: '8px', border: '1px solid #444', backgroundColor: darkMode ? '#222' : '#fff', color: darkMode ? '#fff' : '#000' }}
            value={inputText} 
            onChange={(e) => setInputText(e.target.value)} 
            onKeyPress={(e) => e.key === 'Enter' && handleSend()}
            placeholder="Describe your symptoms..."
          />
          <button 
            onClick={handleSend}
            style={{ backgroundColor: '#007bff', color: 'white', border: 'none', fontWeight: 'bold' }}
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default Chat;