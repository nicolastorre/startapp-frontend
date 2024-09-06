import { IAuthRepository } from "../../domain/interfaces/repositories/IAuthRepository";
import { Connection } from "../../domain/entities/Connection";
import { AuthDataSource } from "../dataSources/AuthDataSource";
import { IConnection } from "../../domain/interfaces/entities/IConnection";

export class AuthRepositoryImpl implements IAuthRepository {
  constructor(private authDataSource: AuthDataSource) {}

  async login(email: string, password: string): Promise<IConnection> {
    try {
      await this.authDataSource.login(email, password);

      return new Connection(true);
    } catch (error: any) {
      throw new Error(error.message || "Failed to login");
    }
  }

  async logout(): Promise<IConnection> {
    try {
      await this.authDataSource.logout();

      return new Connection(false);
    } catch (error: any) {
      throw new Error(error.message || "Failed to logout");
    }
  }

  async refreshConnection(): Promise<IConnection> {
    try {
      await this.authDataSource.refreshConnection();

      return new Connection(true);
    } catch (error: any) {
      throw new Error(error.message || "Failed to refresh connection");
    }
  }
}
