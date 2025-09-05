import { supabase } from "./supabase";

supabase;
export async function signUpUser({ email, password, full_name, roleuser }) {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        full_name,
        roleuser,
      },
    },
  });
  const userid = data.user?.id;
  const useremail = data.user?.email;
  console.log(roleuser);
  await supabase.from("profiles").upsert([
    {
      id: userid,
      email: useremail,
      roleuser,
    },
  ]);
  if (error) throw error;
  return data;
}
export async function Loginuser({ email, password }) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    throw error;
  }

  return data;
}
export async function getcurrenetuser() {
  const { data: sessiondata } = await supabase.auth.getSession();
  if (!sessiondata.session) return null;
  const { data, error } = await supabase.auth.getUser();
  if (error) {
    throw new Error(error.message);
  }
  return data?.user;
}
export async function Logoutuser() {
  const { error } = await supabase.auth.signOut();
  if (error) throw new Error(error.message);
}
export async function updateCurrentUser({ avatar, full_name }) {
  let updatedData = {};
  if (full_name) updatedData.data = { full_name };

  const { data: userData, error: nameError } = await supabase.auth.updateUser(
    updatedData
  );
  if (nameError) throw new Error(nameError.message);

  //  If no avatar, return early
  if (!avatar) return userData;

  //  Upload avatar to Supabase Storage
  const fileName = `avatar-${userData.user.id}-${Date.now()}`;
  const { error: storageError } = await supabase.storage
    .from("avatars")
    .upload(fileName, avatar, {
      cacheControl: "3600",
      upsert: true,
    });
  if (storageError) throw new Error(storageError.message);

  const { data: publicData } = supabase.storage
    .from("avatars")
    .getPublicUrl(fileName);

  const publicUrl = publicData.publicUrl;

  // Update avatar in user metadata
  const { data: finalUser, error: avatarError } =
    await supabase.auth.updateUser({
      data: { avatar: publicUrl },
    });
  if (avatarError) throw new Error(avatarError.message);

  return finalUser;
}
