import { AuthRepository } from "../../domain/interfaces/repositories/AuthRepository";
import { Connection } from "../../domain/entities/ConnectionEntity";
import { AuthDataSource } from "../dataSources/AuthdataSource";

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
      throw new Error(error.message || "Failed to authenticate");
    }
  }

  async refreshConnection(): Promise<{ connection: Connection }> {
    try {
      await this.authDataSource.refreshConnection();

      const connection = new Connection(true);

      return { connection };
    } catch (error: any) {
      throw new Error(error.message || "Failed to authenticate");
    }
  }
}
