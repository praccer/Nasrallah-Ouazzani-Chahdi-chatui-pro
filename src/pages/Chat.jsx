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
    scrollRef.current?.scrollTo(0, scrollRef.current.scrollHeight);
  }, [messages]);

  const handleSend = () => {
    if (!inputText.trim()) return;
    dispatch(addMessage({ id: Date.now(), text: inputText, sender: 'agent', timestamp: new Date().toLocaleTimeString() }));
    setInputText("");

    setTimeout(() => {
      const match = responsesData.responses.find(r => r.triggers.some(t => inputText.toLowerCase().includes(t)));
      const reply = match ? match.message : responsesData.defaultResponses[0];
      dispatch(addMessage({ id: Date.now() + 1, text: reply, sender: 'ARIA', timestamp: new Date().toLocaleTimeString() }));
    }, 1000);
  };

  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-md-10 col-lg-8">
          
          {/* Main Card Container */}
          <div className={`card shadow-lg border-0 rounded-4 overflow-hidden ${darkMode ? 'bg-dark border-secondary text-white' : 'bg-white'}`}>
            
            {/* Chat Header */}
            <div className="card-header bg-primary text-white p-3 d-flex align-items-center border-0">
              <div className="rounded-circle bg-white text-primary d-flex align-items-center justify-content-center me-3 fw-bold shadow-sm" style={{width: '45px', height: '45px'}}>
                A
              </div>
              <div>
                <h5 className="mb-0 fw-bold">ARIA Medical Assistant</h5>
                <small className="opacity-75">Online | Powered by AI</small>
              </div>
            </div>

            {/* Chat Messages Area */}
            <div className={`card-body p-4 overflow-auto ${darkMode ? 'bg-dark' : 'bg-light'}`} style={{ height: '500px' }} ref={scrollRef}>
              {messages.length === 0 && (
                <div className="text-center mt-5 text-muted">
                  <p className="fst-italic">How can I help you with your symptoms today?</p>
                </div>
              )}
              {messages.map(m => (
                <div key={m.id} className={`d-flex mb-4 ${m.sender === 'agent' ? 'justify-content-end' : 'justify-content-start'}`}>
                  <div className={`p-3 shadow-sm rounded-4 ${m.sender === 'agent' ? 'bg-primary text-white' : (darkMode ? 'bg-secondary text-white' : 'bg-white text-dark')}`} style={{ maxWidth: '80%' }}>
                    <p className="mb-1">{m.text}</p>
                    <div className="text-end">
                      <small className="opacity-50" style={{ fontSize: '0.65rem' }}>{m.timestamp}</small>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Input Box Footer */}
            <div className={`card-footer p-3 border-0 ${darkMode ? 'bg-dark' : 'bg-white'}`}>
              <div className="input-group input-group-lg shadow-sm">
                <input 
                  type="text" 
                  className={`form-control border-0 px-4 ${darkMode ? 'bg-secondary text-white' : ''}`}
                  placeholder="Describe your symptoms..."
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                />
                <button className="btn btn-primary px-4 fw-bold" onClick={handleSend}>
                  SEND
                </button>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;