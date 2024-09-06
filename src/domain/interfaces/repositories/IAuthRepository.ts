import { IConnection } from "../entities/IConnection";

export interface IAuthRepository {
  login(email: string, password: string): Promise<IConnection>;
  logout(): Promise<IConnection>;
  refreshConnection(): Promise<IConnection>;
}
