import { createClient } from "@supabase/supabase-js";

const projectURL = import.meta.env.VITE_SUPABASE_URL;
const projectKey = import.meta.env.VITE_SUPABASE_PUBLIC_KEY;

export const supabase = createClient(projectURL, projectKey);