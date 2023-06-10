import { createClient } from "@supabase/supabase-js";

const SUPABASE_URL = "https://hsnagoxfxineuhqzflnl.supabase.co";

export const supabase = createClient(
  SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_ANON_KEY
);
