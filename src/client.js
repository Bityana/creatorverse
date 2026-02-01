import { createClient } from '@supabase/supabase-js';


const URL = 'https://psbedhisdwnncikxfoil.supabase.co';

const API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBzYmVkaGlzZHdubmNpa3hmb2lsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Njk2NDk3NDIsImV4cCI6MjA4NTIyNTc0Mn0.-Y-uM1v89wPg86n87DTh_V3QqU0ZC72WFnIuChLLPZA';


export const supabase = createClient(URL, API_KEY);