import { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Sparkles, Loader } from 'lucide-react';
import { startChat, sendMessage, resetChat } from '../services/geminiApi';
import './ChatBot.css';

export default function ChatBot({ destinationContext = '' }) {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [initialized, setInitialized] = useState(false);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  const initChat = async () => {
    if (initialized) return;
    try {
      await startChat(destinationContext);
      setInitialized(true);
      setMessages([{
        role: 'model',
        text: destinationContext
          ? `Hi! I'm your travel advisor. I see you're exploring ${destinationContext}. What would you like to know? I can help with tips, must-see places, best times to visit, or create a detailed day-by-day itinerary for you.`
          : 'Hi! I\'m your travel advisor. Ask me anything about destinations, travel tips, or I can create a detailed day-by-day itinerary for your trip. Where are you thinking of going?'
      }]);
    } catch (err) {
      setError(err.message);
    }
  };

  const handleOpen = () => {
    setIsOpen(true);
    if (!initialized) {
      initChat();
    }
  };

  const handleSend = async () => {
    const text = input.trim();
    if (!text || isLoading) return;

    setInput('');
    setError(null);
    setMessages(prev => [...prev, { role: 'user', text }]);
    setIsLoading(true);

    try {
      if (!initialized) {
        await startChat(destinationContext);
        setInitialized(true);
      }
      const response = await sendMessage(text);
      setMessages(prev => [...prev, { role: 'model', text: response }]);
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleReset = () => {
    resetChat();
    setInitialized(false);
    setMessages([]);
    setError(null);
    initChat();
  };

  const quickActions = [
    { label: 'Best time to visit?', icon: '🗓️' },
    { label: 'Top 3 must-see places?', icon: '📍' },
    { label: 'Local food to try?', icon: '🍜' },
    { label: 'Budget tips?', icon: '💰' },
  ];

  return (
    <>
      {/* Floating trigger button */}
      {!isOpen && (
        <button
          className="chatbot__trigger btn-primary"
          onClick={handleOpen}
          aria-label="Open AI travel assistant"
          id="chatbot-trigger"
        >
          <MessageCircle size={20} />
          <span className="chatbot__trigger-label">AI Assistant</span>
        </button>
      )}

      {/* Chat panel */}
      {isOpen && (
        <div className="chatbot" role="dialog" aria-label="AI Travel Assistant" id="chatbot-panel">
          <div className="chatbot__header">
            <div className="chatbot__header-info">
              <Sparkles size={18} className="chatbot__header-icon" />
              <div>
                <h4 className="chatbot__header-title">Wanderlust AI</h4>
                <span className="chatbot__header-subtitle">Your travel advisor</span>
              </div>
            </div>
            <div className="chatbot__header-actions">
              <button className="chatbot__header-btn" onClick={handleReset} title="Reset conversation" aria-label="Reset conversation">
                ↻
              </button>
              <button className="chatbot__header-btn" onClick={handleClose} aria-label="Close chat">
                <X size={18} />
              </button>
            </div>
          </div>

          <div className="chatbot__messages" role="log" aria-live="polite">
            {messages.map((msg, i) => (
              <div key={i} className={`chatbot__message chatbot__message--${msg.role}`}>
                <div className="chatbot__message-bubble">
                  {msg.text.split('\n').map((line, j) => (
                    <p key={j}>{line}</p>
                  ))}
                </div>
              </div>
            ))}

            {isLoading && (
              <div className="chatbot__message chatbot__message--model">
                <div className="chatbot__message-bubble chatbot__typing">
                  <span className="chatbot__typing-dot" />
                  <span className="chatbot__typing-dot" />
                  <span className="chatbot__typing-dot" />
                </div>
              </div>
            )}

            {error && (
              <div className="chatbot__error">
                <p>{error}</p>
                <button className="btn-primary chatbot__error-retry" onClick={() => setError(null)}>
                  Dismiss
                </button>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {messages.length <= 1 && !isLoading && (
            <div className="chatbot__quick-actions">
              {quickActions.map((action) => (
                <button
                  key={action.label}
                  className="chatbot__quick-action"
                  onClick={() => {
                    setInput(action.label);
                    setTimeout(() => {
                      setInput(action.label);
                      handleSend();
                    }, 50);
                  }}
                >
                  <span>{action.icon}</span>
                  <span>{action.label}</span>
                </button>
              ))}
            </div>
          )}

          <div className="chatbot__input-area">
            <input
              ref={inputRef}
              type="text"
              className="chatbot__input input-pill"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Ask me anything about travel..."
              disabled={isLoading}
              aria-label="Type your message"
            />
            <button
              className="chatbot__send btn-primary"
              onClick={handleSend}
              disabled={isLoading || !input.trim()}
              aria-label="Send message"
            >
              {isLoading ? <Loader size={18} className="chatbot__send-loader" /> : <Send size={18} />}
            </button>
          </div>
        </div>
      )}
    </>
  );
}
