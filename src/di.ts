import { Container } from "./Container";
import { AuthDataSource } from "./data/dataSources/AuthDataSource";
import { UserDataSource } from "./data/dataSources/UserDataSource";
import { AuthRepositoryImpl } from "./data/repositories/AuthRepositoryImpl";
import { UserRepositoryImpl } from "./data/repositories/UserRepositoryImpl";
import { LoginAuth } from "./domain/usecases/auth/LoginAuth";
import { LogoutAuth } from "./domain/usecases/auth/LogoutAuth";
import { RefreshConnectionAuth } from "./domain/usecases/auth/RefreshConnectionAuth";
import { GetProfileUser } from "./domain/usecases/user/GetProfileUser";

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

Container.registerLazy("UserDataSource", () => new UserDataSource());
Container.registerLazy(
  "UserRepositoryImpl",
  () => new UserRepositoryImpl(Container.get("UserDataSource"))
);
Container.registerLazy(
  "GetProfileUser",
  () => new GetProfileUser(Container.get("UserRepositoryImpl"))
);
