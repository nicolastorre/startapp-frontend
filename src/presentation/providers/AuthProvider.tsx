import React, { createContext, ReactNode, useEffect, useState } from "react";
import { RefreshConnectionAuth } from "../../domain/usecases/auth/RefreshConnectionAuth";
import { IConnection } from "../../domain/interfaces/entities/IConnection";
import { container } from "tsyringe";

export interface AuthContextType {
  connection: IConnection | null;
  setConnection: (connection: IConnection | null) => void;
}

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthContext = createContext<AuthContextType | undefined>(
  undefined
);

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [connection, setConnection] = useState<IConnection | null>(null);

  useEffect(() => {
    const handleRefreshConnection = async () => {
      try {
        const refreshConnectionAuth = container.resolve<RefreshConnectionAuth>(
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
