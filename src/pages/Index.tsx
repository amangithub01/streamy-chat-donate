
import React from 'react';
import Navbar from '@/components/Navbar';
import StreamPlayer from '@/components/StreamPlayer';
import ChatBox from '@/components/ChatBox';
import DonationForm from '@/components/DonationForm';
import DonationAlert from '@/components/DonationAlert';
import AuthModal from '@/components/AuthModal';
import { AuthProvider } from '@/context/AuthContext';
import { ChatProvider } from '@/context/ChatContext';

const Index = () => {
  return (
    <AuthProvider>
      <ChatProvider>
        <div className="min-h-screen flex flex-col bg-stream-dark">
          <Navbar />
          
          <main className="flex-1 container mx-auto py-6 px-4">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2 space-y-6">
                <StreamPlayer />
                <DonationForm />
              </div>
              
              <div className="h-[600px] lg:h-auto">
                <ChatBox />
              </div>
            </div>
          </main>
          
          <DonationAlert />
          <AuthModal />
        </div>
      </ChatProvider>
    </AuthProvider>
  );
};

export default Index;
