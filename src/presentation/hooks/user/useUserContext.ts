import { useContext } from "react";
import { UserContext, UserContextType } from "../../providers/UserProvider";

export function useUserContext(): UserContextType {
  const userContext = useContext(UserContext);
  if (!userContext) {
    throw new Error("useUserContext must be used within a UserProvider");
  }

  return userContext;
}
