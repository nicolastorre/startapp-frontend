import React, { createContext, ReactNode, useEffect, useState } from "react";
import { ConnectionEntity } from "../../domain/interfaces/entities/IConnection";
import { RefreshConnectionAuth } from "../../domain/usecases/auth/RefreshConnectionAuth";
import { Container } from "../../Container";

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

  useEffect(() => {
    const handleRefreshConnection = async () => {
      try {
        const refreshConnectionAuth = Container.get<RefreshConnectionAuth>(
          "RefreshConnectionAuth"
        );
        const { connection } = await refreshConnectionAuth.execute();
        setConnection(connection);
      } catch (err: any) {
        // display toast error
        console.log(err.message || "error");
      }
    };

    handleRefreshConnection();

    return () => {};
  }, []);

  return (
    <AuthContext.Provider value={{ connection, setConnection }}>
      {children}
    </AuthContext.Provider>
  );
};
