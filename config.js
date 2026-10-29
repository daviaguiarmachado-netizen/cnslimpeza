// config.js
const SUPABASE_URL = "https://tcxkivsrmavfcadcoijv.supabase.co";
const SUPABASE_KEY = "COLE_AQUI_SUA_CHAVE_ANON_PUBLIC_DO_SUPABASE"; // Clique em Copy na tela de API Keys do Supabase e cole aqui dentro das aspas

const supabaseClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_KEY);