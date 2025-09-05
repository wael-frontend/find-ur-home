import { useMutation } from "@tanstack/react-query";
import { signUpUser } from "../../Services/apiAutho";

export default function useSignup() {
  const { mutate: signup, isLoading } = useMutation({
    mutationFn: signUpUser,
  });
  return { signup, isLoading };
}
