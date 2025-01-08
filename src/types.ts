export interface Case {
  id: string;
  title: string;
  description: string;
  amount: number;
  status: 'pending' | 'validated' | 'funded';
  createdAt: string;
  createdBy: string;
}

export interface User {
  id: string;
  name: string;
  role: 'needy' | 'trustee' | 'donor';
}