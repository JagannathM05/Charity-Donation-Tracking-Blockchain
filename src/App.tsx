import React, { useState } from 'react';
import { Case, User } from './types';
import { CaseCard } from './components/CaseCard';
import { NewCaseForm } from './components/NewCaseForm';
import { WalletButton } from './components/WalletButton';
import { Users, HandHeart, ShieldCheck } from 'lucide-react';

function App() {
  const [cases, setCases] = useState<Case[]>([]);
  const [userRole, setUserRole] = useState<User['role']>('needy');

  const handleNewCase = (caseData: Omit<Case, 'id' | 'status' | 'createdAt'>) => {
    const newCase: Case = {
      ...caseData,
      id: Math.random().toString(36).substr(2, 9),
      status: 'pending',
      createdAt: new Date().toISOString(),
    };
    setCases([newCase, ...cases]);
  };

  const handleValidate = (caseId: string) => {
    setCases(
      cases.map((c) =>
        c.id === caseId ? { ...c, status: 'validated' } : c
      )
    );
  };

  const handleDonate = async (caseId: string) => {
    if (!window.ethereum) {
      alert('Please install MetaMask to make donations');
      return;
    }

    try {
      // This is where you would integrate with your smart contract
      // For now, we'll just update the status
      setCases(
        cases.map((c) =>
          c.id === caseId ? { ...c, status: 'funded' } : c
        )
      );
    } catch (error) {
      console.error('Donation failed:', error);
      alert('Failed to process donation. Please try again.');
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <nav className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <HandHeart className="w-8 h-8 text-blue-500" />
              <span className="ml-2 text-xl font-bold">Charity Chain</span>
            </div>
            <div className="flex items-center space-x-4">
              <button
                onClick={() => setUserRole('needy')}
                className={`px-4 py-2 rounded-md ${
                  userRole === 'needy' ? 'bg-blue-500 text-white' : 'text-gray-600'
                }`}
              >
                <Users className="w-5 h-5 inline mr-2" />
                Needy
              </button>
              <button
                onClick={() => setUserRole('trustee')}
                className={`px-4 py-2 rounded-md ${
                  userRole === 'trustee' ? 'bg-blue-500 text-white' : 'text-gray-600'
                }`}
              >
                <ShieldCheck className="w-5 h-5 inline mr-2" />
                Trustee
              </button>
              <button
                onClick={() => setUserRole('donor')}
                className={`px-4 py-2 rounded-md ${
                  userRole === 'donor' ? 'bg-blue-500 text-white' : 'text-gray-600'
                }`}
              >
                <HandHeart className="w-5 h-5 inline mr-2" />
                Donor
              </button>
              <WalletButton />
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <h2 className="text-2xl font-bold mb-6">Active Cases</h2>
            <div className="space-y-4">
              {cases.map((c) => (
                <CaseCard
                  key={c.id}
                  case={c}
                  userRole={userRole}
                  onValidate={() => handleValidate(c.id)}
                  onDonate={() => handleDonate(c.id)}
                />
              ))}
              {cases.length === 0 && (
                <p className="text-gray-500 text-center py-8">
                  No cases yet. Be the first to submit a case!
                </p>
              )}
            </div>
          </div>
          <div>
            {userRole === 'needy' && <NewCaseForm onSubmit={handleNewCase} />}
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;