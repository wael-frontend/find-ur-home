import { useQuery } from "@tanstack/react-query";
import { getcurrenetuser } from "../../Services/apiAutho";

export default function useUser() {
  const { data: user } = useQuery({
    queryKey: ["user"],
    queryFn: getcurrenetuser,
  });
  return { user, isAuthenicated: user?.role === "authenticated" };
}
