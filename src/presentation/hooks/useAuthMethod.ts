import { AuthDataSource } from "../../data/dataSources/AuthDataSource";
import { AuthRepositoryImpl } from "../../data/repositories/AuthRepositoryImpl";
import { LoginAuth } from "../../domain/usecases/auth/LoginAuth";
import { LogoutAuth } from "../../domain/usecases/auth/LogoutAuth";
import { useAuthContext } from "./useAuthContext";
import { useNavigate } from "react-router-dom";

const authDataSource = new AuthDataSource();
const authRepository = new AuthRepositoryImpl(authDataSource);
const loginAuth = new LoginAuth(authRepository);
const logoutAuth = new LogoutAuth(authRepository);

export interface AuthMethodType {
  login: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
}

export function useAuthMethod(): AuthMethodType {
  const authContext = useAuthContext();
  const navigate = useNavigate();

  const login = async (email: string, password: string): Promise<void> => {
    try {
      const { connection } = await loginAuth.execute(email, password);
      authContext.setConnection(connection);
      navigate("/dashboard", { replace: true });
    } catch (err: any) {
      console.error(err.message || "error");
    }
  };

  const logout = async (): Promise<void> => {
    try {
      const { connection } = await logoutAuth.execute();
      authContext.setConnection(connection);
      navigate("/", { replace: true });
    } catch (err: any) {
      console.error(err.message || "error");
    }
  };

  return { login, logout };
}
