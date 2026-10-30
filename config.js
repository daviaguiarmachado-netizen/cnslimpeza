// config.js
const SUPABASE_URL = "https://tcxkivsrmavfcadcoijv.supabase.co";
const SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRjeGtpdnNybWF2ZmNhZGNvaWp2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTMzMTUwNTYsImV4cCI6MjEwODg5MTA1Nn0.fWfMZuNF4xlAKZBzMPPGlmcvAKMvXq0u6ufBtp1THGI"; // Clique em Copy na tela de API Keys do Supabase e cole aqui dentro das aspas

const supabaseClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_KEY);
