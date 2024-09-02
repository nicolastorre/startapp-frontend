import { inject, injectable } from "tsyringe";
import { Connection } from "../../domain/entities/ConnectionEntity";
import { IAuthRepository } from "../../domain/interfaces/repositories/IAuthRepository";
import type { IAuthApiDataSource } from "../../domain/interfaces/dataSources/IAuthApiDataSource";

@injectable()
export class AuthRepositoryImpl implements IAuthRepository {
  constructor(
    @inject("IAuthApiDataSource") private authDataSource: IAuthApiDataSource
  ) {}

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
