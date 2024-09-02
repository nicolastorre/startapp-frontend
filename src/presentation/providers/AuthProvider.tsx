import React, { createContext, ReactNode, useEffect, useState } from "react";
import { ConnectionEntity } from "../../domain/interfaces/entities/Connection";
import { AuthRepositoryImpl } from "../../data/repositories/AuthRepositoryImpl";
import { AuthDataSource } from "../../data/dataSources/AuthDataSource";
import { RefreshConnectionAuth } from "../../domain/usecases/auth/RefreshConnectionAuth";

const authDataSource = new AuthDataSource();
const authRepository = new AuthRepositoryImpl(authDataSource);
const refreshConnectionAuth = new RefreshConnectionAuth(authRepository);

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
