import "reflect-metadata";
import { container } from "tsyringe";
import { LoginAuth } from "./domain/usecases/auth/LoginAuth";
import { AuthApiDataSource } from "./data/dataSources/AuthApiDataSource";
import { IAuthApiDataSource } from "./domain/interfaces/dataSources/IAuthApiDataSource";
import { AuthRepositoryImpl } from "./data/repositories/AuthRepositoryImpl";
import { IAuthRepository } from "./domain/interfaces/repositories/IAuthRepository";
import { LogoutAuth } from "./domain/usecases/auth/LogoutAuth";
import { RefreshConnectionAuth } from "./domain/usecases/auth/RefreshConnectionAuth";

container.register<IAuthApiDataSource>("IAuthApiDataSource", {
  useClass: AuthApiDataSource,
});
container.register<IAuthRepository>("IAuthRepository", {
  useClass: AuthRepositoryImpl,
});
container.register<LoginAuth>("LoginAuth", { useClass: LoginAuth });
container.register<LogoutAuth>("LogoutAuth", { useClass: LogoutAuth });
container.register<RefreshConnectionAuth>("RefreshConnectionAuth", {
  useClass: RefreshConnectionAuth,
});
