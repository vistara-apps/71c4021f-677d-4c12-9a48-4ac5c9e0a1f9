'use client';

import { useMiniKit } from '@coinbase/minikit';
import { Wallet, TrendingUp } from 'lucide-react';

export function FrameHeader() {
  const { user } = useMiniKit();

  return (
    <header className="flex items-center justify-between py-4 border-b border-dark-surface">
      <div className="flex items-center space-x-3">
        <div className="w-8 h-8 bg-gradient-to-r from-primary to-accent rounded-lg flex items-center justify-center">
          <TrendingUp className="w-5 h-5 text-white" />
        </div>
        <div>
          <h1 className="text-xl font-bold text-dark-foreground">AlphaFlow</h1>
          <p className="text-sm text-dark-text-secondary">AI Angel Investing</p>
        </div>
      </div>
      
      <div className="flex items-center space-x-3">
        {user ? (
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
              <Wallet className="w-4 h-4 text-white" />
            </div>
            <span className="text-sm text-dark-foreground">Connected</span>
          </div>
        ) : (
          <button className="bg-primary text-white px-4 py-2 rounded-md text-sm hover:bg-primary/90 transition-colors duration-200">
            Connect Wallet
          </button>
        )}
      </div>
    </header>
  );
}
