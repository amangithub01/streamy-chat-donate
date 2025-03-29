
import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import { useAuth } from './AuthContext';
import { toast } from 'sonner';

interface ChatMessage {
  id: string;
  username: string;
  message: string;
  timestamp: string;
  isDonation?: boolean;
  donationAmount?: number;
}

interface ChatContextType {
  messages: ChatMessage[];
  sendMessage: (message: string) => void;
  sendDonation: (amount: number, message: string) => void;
  donations: ChatMessage[];
}

const ChatContext = createContext<ChatContextType | undefined>(undefined);

// Sample initial messages for the chat
const initialMessages: ChatMessage[] = [
  {
    id: '1',
    username: 'System',
    message: 'Welcome to the stream! Please be respectful in chat.',
    timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
  },
  {
    id: '2',
    username: 'StreamerPro',
    message: 'Hey everyone! Thanks for joining today. We\'ll be playing some new games!',
    timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
  },
  {
    id: '3',
    username: 'GameFan',
    message: 'Can\'t wait to see the new content!',
    timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
  },
  {
    id: '4',
    username: 'Viewer123',
    message: 'First time watching, heard great things about your streams!',
    timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
  },
];

export const ChatProvider = ({ children }: { children: ReactNode }) => {
  const [messages, setMessages] = useState<ChatMessage[]>(initialMessages);
  const [donations, setDonations] = useState<ChatMessage[]>([]);
  const { user } = useAuth();

  // Add bot messages occasionally
  useEffect(() => {
    const botMessages = [
      'This stream is awesome!',
      'Anyone else excited for the new game coming out next week?',
      'I've been following for months, never disappoints!',
      'How's everyone doing today?',
      'What's your favorite game right now?'
    ];
    
    const botUsers = ['ViewerPro', 'GameEnthusiast', 'StreamFan', 'CasualGamer', 'LongTimeViewer'];
    
    const interval = setInterval(() => {
      const randomMessage = botMessages[Math.floor(Math.random() * botMessages.length)];
      const randomUser = botUsers[Math.floor(Math.random() * botUsers.length)];
      
      const newMessage: ChatMessage = {
        id: Math.random().toString(),
        username: randomUser,
        message: randomMessage,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };
      
      setMessages(prev => [...prev, newMessage]);
    }, 20000); // Add a message every 20 seconds
    
    return () => clearInterval(interval);
  }, []);

  const sendMessage = (message: string) => {
    if (!user) return;
    
    const newMessage: ChatMessage = {
      id: Math.random().toString(),
      username: user.username,
      message,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };
    
    setMessages(prev => [...prev, newMessage]);
  };

  const sendDonation = (amount: number, message: string) => {
    if (!user) return;
    
    const newDonation: ChatMessage = {
      id: Math.random().toString(),
      username: user.username,
      message,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      isDonation: true,
      donationAmount: amount,
    };
    
    setMessages(prev => [...prev, newDonation]);
    setDonations(prev => [...prev, newDonation]);
    
    toast.success(`Thanks for your donation of $${amount.toFixed(2)}!`);
  };

  return (
    <ChatContext.Provider
      value={{
        messages,
        sendMessage,
        sendDonation,
        donations,
      }}
    >
      {children}
    </ChatContext.Provider>
  );
};

export const useChat = () => {
  const context = useContext(ChatContext);
  if (context === undefined) {
    throw new Error('useChat must be used within a ChatProvider');
  }
  return context;
};
