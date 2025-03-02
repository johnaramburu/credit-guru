
import { createClient } from '@supabase/supabase-js';

// These would be replaced with actual values when connected to Supabase
const supabaseUrl = 'https://your-project-url.supabase.co';
const supabaseAnonKey = 'your-anon-key';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export type UserRole = 'admin' | 'investor' | 'manager';

export type Profile = {
  id: string;
  user_id: string;
  full_name: string;
  role: UserRole;
  created_at: string;
};

export type Investor = {
  id: string;
  user_id: string;
  full_name: string;
  email: string;
  balance: number;
  total_deposited: number;
  total_invested: number;
  created_at: string;
};

export type Deposit = {
  id: string;
  investor_id: string;
  amount: number;
  date: string;
  notes?: string;
  created_at: string;
};

export type Credit = {
  id: string;
  title: string;
  description?: string;
  total_amount: number;
  assigned_amount: number;
  interest_rate: number;
  start_date: string;
  end_date: string;
  status: 'pending' | 'active' | 'completed' | 'cancelled';
  created_at: string;
};

export type CreditAssignment = {
  id: string;
  credit_id: string;
  investor_id: string;
  amount: number;
  created_at: string;
};
