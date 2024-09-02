import { Connection } from "../../entities/ConnectionEntity";

export interface IAuthRepository {
  login(email: string, password: string): Promise<{ connection: Connection }>;
  logout(): Promise<{ connection: Connection }>;
  refreshConnection(): Promise<{ connection: Connection }>;
}
