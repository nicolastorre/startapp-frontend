import React, { createContext, ReactNode, useState } from "react";
import { ConnectionEntity } from "../../domain/interfaces/entities/ConnectionEntity";

export interface AuthContextType {
  connection: ConnectionEntity | null;
  setConnection: (connection: ConnectionEntity | null) => void;
}

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthContext = createContext<AuthContextType | undefined>(
  undefined
);

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [connection, setConnection] = useState<ConnectionEntity | null>(null);

  return (
    <AuthContext.Provider value={{ connection, setConnection }}>
      {children}
    </AuthContext.Provider>
  );
};
