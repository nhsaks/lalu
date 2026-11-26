import { createClient } from "https://esm.sh/@supabase/supabase-js@2";
import { SUPABASE_URL, SUPABASE_ANON_KEY } from "./config.local.js";

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
  auth: {
    persistSession: true,
    autoRefreshToken: true,
    detectSessionInUrl: true
  }
});

export {
  SUPABASE_URL,
  SUPABASE_ANON_KEY,
  JWT_STORAGE_KEY,
  ACTIVE_GAME_KEY,
  FEE_CONFIG_CACHE_KEY,
  JWT_SIGNING_SECRET
} from "./config.local.js";