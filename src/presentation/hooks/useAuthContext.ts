import { useContext } from "react";
import { AuthContext, AuthContextType } from "../providers/AuthProvider";

export function useAuthContext(): AuthContextType {
  const authContext = useContext(AuthContext);
  if (!authContext) {
    throw new Error("useUserContext must be used within a UserProvider");
  }

  return authContext;
}
