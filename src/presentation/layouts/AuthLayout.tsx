import { ReactNode } from "react";
import { Navigate } from "react-router-dom";
import { useAuthContext } from "../hooks/useAuthContext";

interface ProtectedRouteProps {
  children: ReactNode;
}

const AuthLayout = ({ children }: ProtectedRouteProps) => {
  const { connection } = useAuthContext();

  if (!connection?.accessToken) {
    return <Navigate to="/" replace />;
  }

  return <>{children}</>;
};

export default AuthLayout;
