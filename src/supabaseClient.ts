import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://csjbnhvuflwqlncjkujk.supabase.co';
const supabaseAnonKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNzamJuaHZ1Zmx3cWxuY2prdWprIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDk3MzE4OTYsImV4cCI6MjA2NTMwNzg5Nn0.Oi0qWrfoYd2gebt12CxplccD2VbqrBOhlg2x0iDoAhM';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
