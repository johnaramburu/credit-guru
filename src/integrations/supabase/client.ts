// This file is automatically generated. Do not edit it directly.
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://edsyjarlmdzzseidpnbe.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVkc3lqYXJsbWR6enNlaWRwbmJlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDA5MzAyNzEsImV4cCI6MjA1NjUwNjI3MX0.er8xMEm1yOU0Hf31_nbgS6h2r9l0UotrapaeyVkQ49A";

// Import the supabase client like this:
// import { supabase } from "@/integrations/supabase/client";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);