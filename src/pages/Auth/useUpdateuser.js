import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateCurrentUser } from "../../Services/apiAutho";

export default function useUpdateuser() {
  const queryClient = useQueryClient();

  const {
    mutate: Updatingdata,
    isLoading,
    isError,
    error,
  } = useMutation({
    mutationFn: updateCurrentUser,
    onSuccess: ({ user }) => {
      queryClient.setQueryData(["user"], user);
    },
  });

  return { Updatingdata, isLoading, isError, error };
}
