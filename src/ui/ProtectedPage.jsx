import useUser from "../pages/Auth/useUser";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export default function ProtectedPage({ children }) {
  const navigate = useNavigate();
  const { isAuthenicated } = useUser();
  useEffect(
    function () {
      if (!isAuthenicated) navigate("/Login");
    },
    [navigate, isAuthenicated]
  );
  if (isAuthenicated) return children;
}
