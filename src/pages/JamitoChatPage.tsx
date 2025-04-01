import React from 'react';
import JamitoChat from '@/components/JamitoChat';

const JamitoChatPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-4">Chat con Jamito</h1>
        <JamitoChat />
      </main>
    </div>
  );
};

export default JamitoChatPage; 