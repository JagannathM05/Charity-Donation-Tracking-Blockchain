import React from 'react';
import { Wallet } from 'lucide-react';
import { useMetaMask } from '../hooks/useMetaMask';

export function WalletButton() {
  const { account, error, connectWallet, disconnectWallet } = useMetaMask();

  return (
    <div>
      {error && (
        <div className="text-red-500 text-sm mb-2">{error}</div>
      )}
      {account ? (
        <button
          onClick={disconnectWallet}
          className="bg-gray-100 text-gray-800 px-4 py-2 rounded-md hover:bg-gray-200 flex items-center"
        >
          <Wallet className="w-4 h-4 mr-2" />
          {account.slice(0, 6)}...{account.slice(-4)}
        </button>
      ) : (
        <button
          onClick={connectWallet}
          className="bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700 flex items-center"
        >
          <Wallet className="w-4 h-4 mr-2" />
          Connect Wallet
        </button>
      )}
    </div>
  );
}