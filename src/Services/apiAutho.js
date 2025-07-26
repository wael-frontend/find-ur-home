import supabase from "./supabase";
export async function singUpuser({ email, password, full_name, role }) {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        full_name,
        role,
      },
    },
  });
  const userid = data.user?.id;
  const useremail = data.user?.email;
  await supabase.from("profiles").insert([
    {
      user_id: userid,
      email: useremail,
    },
  ]);
  if (error) throw error;
  return data;
}
