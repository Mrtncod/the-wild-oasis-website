import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_KEY,
);

export default supabase;

// console.log("URL:", process.env.SUPABASE_URL);
// console.log("KEY exists:", !!process.env.SUPABASE_KEY);

// const supabase = createClient(
//   process.env.SUPABASE_URL,
//   process.env.SUPABASE_KEY,
// );

// export default supabase;
