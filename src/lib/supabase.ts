
import { createClient } from '@supabase/supabase-js';

// Configuración de Supabase con las credenciales correctas
const supabaseUrl = 'https://edsyjarlmdzzseidpnbe.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVkc3lqYXJsbWR6enNlaWRwbmJlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDA5MzAyNzEsImV4cCI6MjA1NjUwNjI3MX0.er8xMEm1yOU0Hf31_nbgS6h2r9l0UotrapaeyVkQ49A';

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
