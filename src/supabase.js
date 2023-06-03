import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://uznrpckxphngfepybcyd.supabase.co';
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InV6bnJwY2t4cGhuZ2ZlcHliY3lkIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODQ4MDU4NjksImV4cCI6MjAwMDM4MTg2OX0.WsbITBdpI5CadJDT5Qqmmuj9hIMZEKJfeLvch48wFxk';
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;

// MIQDLNBrccuLDnIP (supabase)

