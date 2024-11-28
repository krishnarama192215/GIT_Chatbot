import React, { useState } from 'react';
import { Send, Mic, Camera } from 'lucide-react';
import { Message } from '../types';
import { ChatMessage } from './ChatMessage';
import { VoiceModal } from './VoiceModal';

export const ChatWindow: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isVoiceModalOpen, setIsVoiceModalOpen] = useState(false);

  const handleSend = () => {
    if (!input.trim()) return;

    const newMessage: Message = {
      id: Date.now().toString(),
      content: input,
      sender: 'user',
      timestamp: new Date(),
    };

    setMessages([...messages, newMessage]);
    setInput('');

    // Simulate bot response
    setTimeout(() => {
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        content: "I'm here to help! How can I assist you today?",
        sender: 'bot',
        timestamp: new Date(),
      };
      setMessages(prev => [...prev, botResponse]);
    }, 1000);
  };

  return (
    <div className="flex flex-col h-full bg-white/30 backdrop-blur-lg rounded-2xl shadow-lg">
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message) => (
          <ChatMessage key={message.id} message={message} />
        ))}
      </div>
      
      <div className="border-t border-gray-200 p-4">
        <div className="flex items-center space-x-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSend()}
            className="flex-1 px-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="Type your message..."
          />
          <button
            onClick={() => setIsVoiceModalOpen(true)}
            className="p-2 rounded-full hover:bg-gray-100 transition-colors"
          >
            <Mic className="w-5 h-5 text-gray-600" />
          </button>
          <button
            onClick={() => alert('Camera feature coming soon!')}
            className="p-2 rounded-full hover:bg-gray-100 transition-colors"
          >
            <Camera className="w-5 h-5 text-gray-600" />
          </button>
          <button
            onClick={handleSend}
            className="p-2 rounded-full bg-indigo-600 hover:bg-indigo-700 transition-colors"
          >
            <Send className="w-5 h-5 text-white" />
          </button>
        </div>
      </div>

      <VoiceModal
        isOpen={isVoiceModalOpen}
        onClose={() => setIsVoiceModalOpen(false)}
        onTranscription={(text) => setInput(text)}
      />
    </div>
  );
};