import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://msodvxyadnyjxavnnboa.supabase.co";
const supabaseKey =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1zb2R2eHlhZG55anhhdm5uYm9hIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTYzNzk0NzksImV4cCI6MjAzMTk1NTQ3OX0.jPHyUHX71KpFRTx3HinlggltfrCGVH-Xg17gP4t8cbg";

export const supabase = createClient(supabaseUrl, supabaseKey);
