import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Loginuser } from "../../Services/apiAutho";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

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
      toast.success("sucessfuly loged in");
    },
    onError: () => toast.error("passwoard or email are inccorect"),
  });

  return { login, isLoading, error };
}
