import React from 'react';
import { TechCat } from './components/TechCat';
import { ChatWindow } from './components/ChatWindow';
import { RightMenu } from './components/RightMenu';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500">
      <div className="container mx-auto px-4 py-8 h-screen">
        <div className="flex flex-col h-full space-y-6">
          <div className="flex items-center justify-center space-x-4">
            <TechCat />
            <h1 className="text-4xl font-bold text-white">Tech-Cat Assistant</h1>
          </div>
          
          <div className="flex-1 flex space-x-6">
            <div className="flex-1">
              <ChatWindow />
            </div>
            <RightMenu />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;