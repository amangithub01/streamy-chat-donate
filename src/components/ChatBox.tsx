
import React, { useState, useEffect, useRef } from 'react';
import { Send, User, Gift, Users } from 'lucide-react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';
import { useAuth } from '@/context/AuthContext';
import { useChat } from '@/context/ChatContext';

interface ChatMessageProps {
  username: string;
  message: string;
  timestamp: string;
  isDonation?: boolean;
  donationAmount?: number;
}

const ChatMessage = ({ username, message, timestamp, isDonation, donationAmount }: ChatMessageProps) => {
  return (
    <div className={`py-2 chat-message-appear ${isDonation ? 'bg-stream-donation/10 px-2 rounded-md' : ''}`}>
      <div className="flex items-start gap-2">
        <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs text-white ${isDonation ? 'bg-stream-donation' : 'bg-stream-accent'}`}>
          {isDonation ? <Gift className="w-3 h-3" /> : username.charAt(0).toUpperCase()}
        </div>
        <div className="flex-1">
          <div className="flex items-center gap-2">
            <span className={`font-medium text-sm ${isDonation ? 'text-stream-donation' : 'text-stream-accent'}`}>
              {username}
            </span>
            {isDonation && (
              <span className="bg-stream-donation/20 text-stream-donation text-xs px-2 py-0.5 rounded-full">
                ${donationAmount?.toFixed(2)}
              </span>
            )}
            <span className="text-muted-foreground text-xs">{timestamp}</span>
          </div>
          <p className="text-sm mt-0.5">{message}</p>
        </div>
      </div>
    </div>
  );
};

const ChatBox = () => {
  const [message, setMessage] = useState('');
  const { user, openAuthModal } = useAuth();
  const { messages, sendMessage, sendDonation } = useChat();
  const messagesEndRef = useRef<null | HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim() || !user) return;
    
    sendMessage(message);
    setMessage('');
  };

  return (
    <Card className="bg-muted/50 border-muted h-full flex flex-col">
      <CardHeader className="py-3 px-3">
        <CardTitle className="text-base flex items-center gap-2">
          <Users className="h-4 w-4 text-stream-secondary" />
          Live Chat
        </CardTitle>
      </CardHeader>
      <Separator />
      <CardContent className="p-3 flex-1 overflow-y-auto">
        <div className="space-y-1">
          {messages.map((msg, index) => (
            <ChatMessage
              key={index}
              username={msg.username}
              message={msg.message}
              timestamp={msg.timestamp}
              isDonation={msg.isDonation}
              donationAmount={msg.donationAmount}
            />
          ))}
          <div ref={messagesEndRef} />
        </div>
      </CardContent>
      <Separator />
      <CardFooter className="p-3">
        {user ? (
          <form onSubmit={handleSendMessage} className="w-full flex gap-2">
            <Input
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Send a message"
              className="flex-1 bg-background border-muted"
            />
            <Button type="submit" size="icon" className="bg-stream-accent hover:bg-stream-accent/90">
              <Send className="h-4 w-4" />
            </Button>
          </form>
        ) : (
          <Button onClick={openAuthModal} className="w-full bg-stream-accent hover:bg-stream-accent/90">
            Sign In to Chat
          </Button>
        )}
      </CardFooter>
    </Card>
  );
};

export default ChatBox;
