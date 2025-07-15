import { useQuery } from "@tanstack/react-query";
import { getListings } from "../../Services/apilisteng";

export function useListingData() {
  const { data: listings, isLoading } = useQuery({
    queryKey: ["listings"],
    queryFn: getListings,
  });
  return { isLoading, listings };
}
