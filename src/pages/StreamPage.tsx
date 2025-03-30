
import React from 'react';
import { AuthProvider } from '@/context/AuthContext';
import { ChatProvider } from '@/context/ChatContext';
import Navbar from '@/components/Navbar';
import StreamPlayer from '@/components/StreamPlayer';
import ChatBox from '@/components/ChatBox';
import DonationForm from '@/components/DonationForm';
import DonationAlert from '@/components/DonationAlert';
import { Separator } from '@/components/ui/separator';

const StreamPage = () => {
  return (
    <AuthProvider>
      <ChatProvider>
        <div className="min-h-screen bg-stream-dark flex flex-col">
          <Navbar />
          <DonationAlert />
          
          <main className="flex-1 container mx-auto px-4 py-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2">
                <StreamPlayer />
                <Separator className="my-6" />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-6">
                    <h2 className="text-lg font-semibold">About the Stream</h2>
                    <p className="text-muted-foreground">
                      Join us for an exciting gaming session with friends! We'll be exploring new game mechanics,
                      trying out different strategies, and having fun together. Feel free to chat and participate!
                    </p>
                    <div>
                      <h3 className="text-sm font-medium mb-2">Tags</h3>
                      <div className="flex flex-wrap gap-2">
                        <span className="px-2 py-1 rounded-full bg-muted/50 text-xs">Gaming</span>
                        <span className="px-2 py-1 rounded-full bg-muted/50 text-xs">Multiplayer</span>
                        <span className="px-2 py-1 rounded-full bg-muted/50 text-xs">Adventure</span>
                        <span className="px-2 py-1 rounded-full bg-muted/50 text-xs">Strategy</span>
                      </div>
                    </div>
                  </div>
                  <DonationForm />
                </div>
              </div>
              <div className="h-[80vh] lg:h-screen pb-14 lg:pb-0">
                <ChatBox />
              </div>
            </div>
          </main>
        </div>
      </ChatProvider>
    </AuthProvider>
  );
};

export default StreamPage;
