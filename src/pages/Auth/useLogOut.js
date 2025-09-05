import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Logoutuser } from "../../Services/apiAutho";
import { useNavigate } from "react-router-dom";

export default function useLogOut() {
  const navigate = useNavigate();
  const queryclient = useQueryClient();
  const { mutate: Logout } = useMutation({
    mutationFn: Logoutuser,
    onSuccess: () => {
      queryclient.removeQueries();
      navigate("login", { replace: true });
    },
  });
  return { Logout };
}
