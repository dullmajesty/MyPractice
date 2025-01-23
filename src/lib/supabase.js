import AsyncStorage from '@react-native-async-storage/async-storage'
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = "https://rgplafryduofgrejimjy.supabase.co"
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJncGxhZnJ5ZHVvZmdyZWppbWp5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzc2NDQ2MjQsImV4cCI6MjA1MzIyMDYyNH0.RqtG7Ct9jty0nkWy0m-iNpXOdKD7Kn5tEYja6JbuPdI"

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: AsyncStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
})