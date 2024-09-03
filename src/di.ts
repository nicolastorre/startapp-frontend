import { Container } from "./Container";
import { AuthDataSource } from "./data/dataSources/AuthDataSource";
import { AuthRepositoryImpl } from "./data/repositories/AuthRepositoryImpl";
import { LoginAuth } from "./domain/usecases/auth/LoginAuth";
import { LogoutAuth } from "./domain/usecases/auth/LogoutAuth";
import { RefreshConnectionAuth } from "./domain/usecases/auth/RefreshConnectionAuth";

Container.registerLazy("AuthDataSource", () => new AuthDataSource());
Container.registerLazy(
  "AuthRepository",
  () => new AuthRepositoryImpl(Container.get("AuthDataSource"))
);
Container.registerLazy(
  "LoginAuth",
  () => new LoginAuth(Container.get("AuthRepository"))
);
Container.registerLazy(
  "LogoutAuth",
  () => new LogoutAuth(Container.get("AuthRepository"))
);
Container.registerLazy(
  "RefreshConnectionAuth",
  () => new RefreshConnectionAuth(Container.get("AuthRepository"))
);
