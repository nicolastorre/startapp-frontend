import { AuthRepository } from "../../domain/interfaces/repositories/AuthRepository";
import { User } from "../../domain/entities/User";
import { Connection } from "../../domain/entities/Connection";
import { AuthDataSource } from "../dataSources/AuthdataSource";

export class AuthRepositoryImpl implements AuthRepository {
  constructor(private authDataSource: AuthDataSource) {}

  async login(
    email: string,
    password: string
  ): Promise<{ user: User; connection: Connection }> {
    try {
      const data = await this.authDataSource.login(email, password);

      const user = new User(data.id, data.name, data.email);
      const connection = new Connection(data.accessToken, data.refreshToken);

      return { user, connection };
    } catch (error: any) {
      throw new Error(error.message || "Failed to authenticate");
    }
  }

  async getAuthenticatedUser(): Promise<User | null> {
    const user = JSON.parse(localStorage.getItem("user_info") || "null");
    return user ? new User(user.id, user.name, user.email) : null;
  }

  async getConnection(): Promise<Connection | null> {
    const accessToken = localStorage.getItem("jwt_token");
    const refreshToken = localStorage.getItem("refresh_token");
    return accessToken && refreshToken
      ? new Connection(accessToken, refreshToken)
      : null;
  }
}
