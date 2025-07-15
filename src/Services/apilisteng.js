import supabase from "./supabase";

export async function getListings() {
  const { data, error } = await supabase.from("listings").select("*");
  if (error) {
    console.log(error);
    throw new Error("couldent load listing");
  }
  return data;
}
export async function CreateListing(data) {
  const { data: inserteddata, error } = await supabase
    .from("listings")
    .insert([{ ...data }]);
  if (error) {
    throw new Error("Failed to create listing: " + error.message);
  }
  return inserteddata;
}
