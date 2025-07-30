import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Loginuser } from "../../Services/apiAutho";
import { useNavigate } from "react-router-dom";

export default function useLogin() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const {
    mutate: login,
    isLoading,
    error,
  } = useMutation({
    mutationKey: ["login"],
    mutationFn: ({ email, password }) => Loginuser({ email, password }),
    onSuccess: (data) => {
      queryClient.setQueryData(["user"], data.user);
      navigate("/");
    },
  });

  return { login, isLoading, error };
}
