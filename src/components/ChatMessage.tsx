import React from 'react';
import { motion } from 'framer-motion';
import { Message } from '../types';
import { TechCat } from './TechCat';

interface ChatMessageProps {
  message: Message;
}

export const ChatMessage: React.FC<ChatMessageProps> = ({ message }) => {
  const isBot = message.sender === 'bot';

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className={`flex ${isBot ? 'flex-row' : 'flex-row-reverse'} items-start gap-2`}
    >
      {isBot ? (
        <div className="w-8 h-8">
          <TechCat />
        </div>
      ) : (
        <div className="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center">
          <span className="text-sm text-indigo-600">You</span>
        </div>
      )}
      <div
        className={`max-w-[70%] px-4 py-2 rounded-2xl ${
          isBot
            ? 'bg-white text-gray-800'
            : 'bg-indigo-600 text-white'
        }`}
      >
        {message.content}
      </div>
    </motion.div>
  );
};