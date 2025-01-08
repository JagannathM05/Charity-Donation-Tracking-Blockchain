import React from 'react';
import { Case } from '../types';
import { Clock, CheckCircle, DollarSign } from 'lucide-react';
import { BrowserProvider, parseEther } from 'ethers';

interface CaseCardProps {
  case: Case;
  onValidate?: () => void;
  onDonate?: () => void;
  userRole: string;
}

export function CaseCard({ case: c, onValidate, onDonate, userRole }: CaseCardProps) {
  const statusColors = {
    pending: 'bg-yellow-100 text-yellow-800',
    validated: 'bg-blue-100 text-blue-800',
    funded: 'bg-green-100 text-green-800',
  };

  const handleDonation = async () => {
    try {
      if (!window.ethereum) {
        alert('Please install MetaMask to make donations');
        return;
      }

      const provider = new BrowserProvider(window.ethereum);
      const signer = await provider.getSigner();
      
      // Convert to a small test amount (0.01 ETH)
      const amountInEth = parseEther("0.01");

      // Request account access
      await window.ethereum.request({ method: 'eth_requestAccounts' });

      // Send transaction
      const tx = await signer.sendTransaction({
        to: "0xa910d223E87b912a80D944Da6cc11f1CB5f211a7", // Vitalik's address as example
        value: amountInEth,
        gasLimit: "21000"
      });

      console.log('Transaction sent:', tx.hash);
      await tx.wait();
      onDonate?.();
      
    } catch (error) {
      console.error('Transaction failed:', error);
      alert('Transaction failed. Please try again.');
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-4">
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-xl font-semibold">{c.title}</h3>
        <span className={`px-3 py-1 rounded-full text-sm ${statusColors[c.status]}`}>
          {c.status}
        </span>
      </div>
      <p className="text-gray-600 mb-4">{c.description}</p>
      <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
        <span className="flex items-center">
          <Clock className="w-4 h-4 mr-1" />
          {new Date(c.createdAt).toLocaleDateString()}
        </span>
        <span className="font-semibold text-lg">
          <DollarSign className="w-5 h-5 inline" />
          {c.amount}
        </span>
      </div>
      <div className="flex justify-end space-x-2">
        {userRole === 'trustee' && c.status === 'pending' && (
          <button
            onClick={onValidate}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 flex items-center"
          >
            <CheckCircle className="w-4 h-4 mr-2" />
            Validate
          </button>
        )}
        {userRole === 'donor' && c.status === 'validated' && (
          <button
            onClick={handleDonation}
            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 flex items-center"
          >
            <DollarSign className="w-4 h-4 mr-2" />
            Donate 0.01 ETH
          </button>
        )}
      </div>
    </div>
  );
}