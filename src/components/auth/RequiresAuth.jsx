import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../../context/auth-context";
export default function RequiresAuth({ children }) {
  const { auth } = useAuth();
  const location = useLocation();

  return auth ? (
    children
  ) : (
    <Navigate state={{ from: location }} to="/login" replace />
  );
}
