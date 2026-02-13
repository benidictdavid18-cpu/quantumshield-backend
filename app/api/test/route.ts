// app/api/test/route.ts

import { createServerClient } from '@/lib/supabase'; // Adjust '@/' if your alias is different; or use '../lib/supabase' if no alias
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const supabase = createServerClient();

    // Use a built-in RPC call that doesn't need a table (always works)
    const { data, error } = await supabase.rpc('now'); // Returns current server time

    if (error) throw error;

    return NextResponse.json({
      message: 'Supabase is connected successfully!',
      serverTime: data,
      timestamp: new Date().toISOString()
    });
  } catch (err: any) {
    console.error('Supabase test error:', err);
    return NextResponse.json({ error: err.message || 'Unknown error' }, { status: 500 });
  }
}