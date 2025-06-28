import { createClient } from '@supabase/supabase-js';

export const supabase = createClient(
  'https://kkyxarbfsbjypbfghsuw.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtreXhhcmJmc2JqeXBiZmdoc3V3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTAzNjYzODcsImV4cCI6MjA2NTk0MjM4N30.XFMwcsPLzli9rTiMzzpisjzdgVLESncSE5vJ7JY-_Bc'
);