import { useContext } from "react";
import { AuthContext, AuthContextType } from "../providers/AuthProvider";

export function useAuthContext(): AuthContextType {
  const authContext = useContext(AuthContext);
  if (!authContext) {
    throw new Error("useAuthContext must be used within a AuthProvider");
  }

  return authContext;
}
