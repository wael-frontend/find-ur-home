const BASE_URL = import.meta.env.VITE_BASE_URL;
export async function getCityFromCoords(lat, lng) {
  const res = await fetch(`${BASE_URL}?lat=${lat}&lon=${lng}&format=json`);
  const data = await res.json();

  // Try multiple fields to find the city name
  console.log(data);
  return { data };
}
