import { ReactNode } from "react";
import { Navigate } from "react-router-dom";
import { useAuthContext } from "../hooks/auth/useAuthContext";

interface ProtectedRouteProps {
  children: ReactNode;
}

const AuthLayout = ({ children }: ProtectedRouteProps) => {
  const { connection } = useAuthContext();

  if (!connection?.isAuthenticated) {
    return <Navigate to="/" replace />;
  }

  return <>{children}</>;
};

export default AuthLayout;
