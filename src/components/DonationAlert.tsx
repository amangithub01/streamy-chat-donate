
import React, { useEffect, useState } from 'react';
import { Gift } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { useChat } from '@/context/ChatContext';

interface DonationAlertProps {
  username: string;
  amount: number;
  message: string;
}

const DonationAlert = ({ username, amount, message }: DonationAlertProps) => {
  return (
    <Card className="border-2 border-stream-donation shadow-lg animate-donation-pop bg-gradient-to-r from-stream-dark to-stream-dark/90 max-w-md w-full">
      <CardContent className="p-4">
        <div className="flex items-center gap-3">
          <div className="donation-pulse h-10 w-10 rounded-full bg-stream-donation/20 flex items-center justify-center">
            <Gift className="h-5 w-5 text-stream-donation" />
          </div>
          <div>
            <p className="font-bold text-stream-donation">
              ${amount.toFixed(2)} Donation!
            </p>
            <p className="text-sm text-foreground">
              <span className="font-medium">{username}</span> just donated
            </p>
          </div>
        </div>
        {message && (
          <div className="mt-3 bg-stream-donation/10 p-2 rounded-md text-sm">
            "{message}"
          </div>
        )}
      </CardContent>
    </Card>
  );
};

const DonationAlertContainer = () => {
  const { donations } = useChat();
  const [visibleDonation, setVisibleDonation] = useState<{
    username: string;
    amount: number;
    message: string;
  } | null>(null);

  useEffect(() => {
    if (donations.length > 0) {
      const latestDonation = donations[donations.length - 1];
      setVisibleDonation({
        username: latestDonation.username,
        amount: latestDonation.donationAmount || 0,
        message: latestDonation.message,
      });

      // Hide the donation alert after 5 seconds
      const timer = setTimeout(() => {
        setVisibleDonation(null);
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [donations]);

  if (!visibleDonation) return null;

  return (
    <div className="fixed top-20 right-0 left-0 flex justify-center donation-alert-container">
      <DonationAlert
        username={visibleDonation.username}
        amount={visibleDonation.amount}
        message={visibleDonation.message}
      />
    </div>
  );
};

export default DonationAlertContainer;
