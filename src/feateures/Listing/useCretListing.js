import { useMutation, useQueryClient } from "@tanstack/react-query";
import { CreateListing } from "../../Services/apilisteng";

export default function useCretListing() {
  const queryclinet = useQueryClient();
  const { mutate: creatListingf, isPending: isCreating } = useMutation({
    mutationFn: CreateListing,
    onSuccess: () => {
      queryclinet.invalidateQueries({ queryKey: ["listings"] });
    },
  });
  return { creatListingf, isCreating };
}
