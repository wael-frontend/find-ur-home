import { useMutation } from "@tanstack/react-query";
import { singUpuser } from "../../Services/apiAutho";

export default function useSignup() {
  const { mutate: signup, isLoading } = useMutation({
    mutationFn: singUpuser,
  });
  return { signup, isLoading };
}
