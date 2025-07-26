export async function getCityFromCoords(lat, lng) {
  try {
    const res = await fetch(
      `https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lng}&format=json`
    );
    const data = await res.json();

    const city =
      data.address.city ||
      data.address.town ||
      data.address.village ||
      data.address.hamlet ||
      data.address.country ||
      "";
    const country = data.address.country || "";
    const Country_code = data.address.country_code;
    console.log(data);

    return { city, country, Country_code };
  } catch (error) {
    console.error("Failed to fetch city from coordinates:", error);
    return { city: "" };
  }
}
