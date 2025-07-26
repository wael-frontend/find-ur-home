import supabase from "./supabase";
import { supabaseUrl } from "./supabase";
export async function getListings() {
  const { data, error } = await supabase.from("listings").select("*");
  if (error) {
    console.log(error);
    throw new Error("couldent load listing");
  }
  return data;
}

export async function CreateListing(newlisting) {
  const isAlreadyUploaded = newlisting?.image?.startsWith?.(supabaseUrl);

  let imagePath = newlisting.image;

  if (!isAlreadyUploaded) {
    const imageName = `${Math.random()}-${newlisting.image.name}`.replace(
      "/",
      ""
    );
    imagePath = `${supabaseUrl}/storage/v1/object/public/listingimages//${imageName}`;

    const { error: storageError } = await supabase.storage
      .from("listingimages")
      .upload(imageName, newlisting.image);

    if (storageError) {
      throw new Error("Image upload failed: " + storageError.message);
    }
  }

  const { data, error } = await supabase
    .from("listings")
    .insert([
      {
        ...newlisting,

        image: imagePath,
      },
    ])
    .select()
    .single();

  if (error) {
    throw new Error("Failed to create listing: " + error.message);
  }

  return data;
}
