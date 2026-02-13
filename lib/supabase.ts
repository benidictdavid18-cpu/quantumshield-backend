// lib/supabase.ts - Server-only client for API routes

import { createClient } from '@supabase/supabase-js';

export function createServerClient() {
  const supabaseUrl = process.env.SUPABASE_URL;
  const supabaseAnonKey = process.env.SUPABASE_ANON_KEY;

  if (!supabaseUrl) {
    throw new Error('SUPABASE_URL is required in environment variables');
  }
  if (!supabaseAnonKey) {
    throw new Error('SUPABASE_ANON_KEY is required in environment variables');
  }

  return createClient(supabaseUrl, supabaseAnonKey);
}