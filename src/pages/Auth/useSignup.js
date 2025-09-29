import { useMutation, useQueryClient } from "@tanstack/react-query";
import { signUpUser } from "../../Services/apiAutho";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export default function useSignup() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { mutate: signup, isLoading } = useMutation({
    mutationFn: signUpUser,
    onSuccess: (data) => {
      queryClient.setQueryData(["user"], data.user);
      navigate("/dashboard");
      toast.success("sucessfuly loged in");
    },
    onError: () => toast.error("passwoard or email are inccorect"),
  });
  return { signup, isLoading };
}
