import { AuthRepository } from "../../domain/interfaces/repositories/AuthRepository";
import { Connection } from "../../domain/entities/ConnectionEntity";
import { AuthDataSource } from "../dataSources/AuthDataSource";

export class AuthRepositoryImpl implements AuthRepository {
  constructor(private authDataSource: AuthDataSource) {}

  async login(
    email: string,
    password: string
  ): Promise<{ connection: Connection }> {
    try {
      await this.authDataSource.login(email, password);

      const connection = new Connection(true);

      return { connection };
    } catch (error: any) {
      throw new Error(error.message || "Failed to login");
    }
  }

  async logout(): Promise<{ connection: Connection }> {
    try {
      await this.authDataSource.logout();

      const connection = new Connection(false);

      return { connection };
    } catch (error: any) {
      throw new Error(error.message || "Failed to logout");
    }
  }

  async refreshConnection(): Promise<{ connection: Connection }> {
    try {
      await this.authDataSource.refreshConnection();

      const connection = new Connection(true);

      return { connection };
    } catch (error: any) {
      throw new Error(error.message || "Failed to refresh connection");
    }
  }
}
