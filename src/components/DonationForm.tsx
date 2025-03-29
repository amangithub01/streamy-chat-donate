
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Gift, DollarSign } from 'lucide-react';
import { useAuth } from '@/context/AuthContext';
import { useChat } from '@/context/ChatContext';

const predefinedAmounts = [5, 10, 20, 50, 100];

const DonationForm = () => {
  const [amount, setAmount] = useState<number>(5);
  const [message, setMessage] = useState('');
  const [customAmount, setCustomAmount] = useState<string>('');
  const [isProcessing, setIsProcessing] = useState(false);
  
  const { user, openAuthModal } = useAuth();
  const { sendDonation } = useChat();

  const handleAmountSelect = (value: number) => {
    setAmount(value);
    setCustomAmount('');
  };

  const handleCustomAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    
    // Only allow numbers and decimals
    if (value === '' || /^\d+(\.\d{0,2})?$/.test(value)) {
      setCustomAmount(value);
      setAmount(Number(value));
    }
  };

  const handleDonate = () => {
    if (!user) {
      openAuthModal();
      return;
    }

    if (amount <= 0) return;

    setIsProcessing(true);
    
    // Simulate donation processing
    setTimeout(() => {
      sendDonation(amount, message);
      setMessage('');
      setIsProcessing(false);
    }, 1000);
  };

  return (
    <Card className="bg-muted/50 border-muted">
      <CardHeader className="py-3 px-4">
        <CardTitle className="text-base flex items-center gap-2">
          <Gift className="h-4 w-4 text-stream-donation" />
          Support the Streamer
        </CardTitle>
      </CardHeader>
      <CardContent className="p-4 space-y-4">
        <div className="space-y-2">
          <label className="text-sm font-medium">Donation Amount</label>
          <div className="grid grid-cols-5 gap-2">
            {predefinedAmounts.map((value) => (
              <Button
                key={value}
                type="button"
                variant={amount === value && customAmount === '' ? "default" : "outline"}
                className={amount === value && customAmount === '' ? "bg-stream-donation hover:bg-stream-donation/90" : ""}
                onClick={() => handleAmountSelect(value)}
              >
                ${value}
              </Button>
            ))}
          </div>
          <div className="flex items-center mt-2">
            <span className="bg-muted flex items-center justify-center p-2 rounded-l-md border border-r-0 border-input">
              <DollarSign className="h-4 w-4 text-muted-foreground" />
            </span>
            <Input
              type="text"
              value={customAmount}
              onChange={handleCustomAmountChange}
              placeholder="Custom amount"
              className="rounded-l-none"
            />
          </div>
        </div>
        
        <div className="space-y-2">
          <label className="text-sm font-medium">Message (optional)</label>
          <Textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Add a message to your donation"
            className="resize-none bg-background border-input"
            rows={3}
          />
        </div>
        
        <Button
          onClick={handleDonate}
          disabled={isProcessing || amount <= 0}
          className="w-full bg-stream-donation hover:bg-stream-donation/90"
        >
          {isProcessing ? "Processing..." : "Donate"}
        </Button>
        
        <p className="text-xs text-center text-muted-foreground mt-2">
          All donations go directly to support the streamer.
        </p>
      </CardContent>
    </Card>
  );
};

export default DonationForm;
