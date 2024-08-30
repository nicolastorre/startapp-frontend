import { ReactNode } from "react";
import { Navigate } from "react-router-dom";
import { useAuthContext } from "../hooks/useAuthContext";

interface ProtectedRouteProps {
  children: ReactNode;
}

const NoAuthLayout = ({ children }: ProtectedRouteProps) => {
  const { connection } = useAuthContext();

  if (connection?.accessToken) {
    return <Navigate to="/dashboard" replace />;
  }

  return <>{children}</>;
};

export default NoAuthLayout;
