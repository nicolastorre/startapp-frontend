import { Connection } from "../../entities/Connection";

export interface IAuthRepository {
  login(email: string, password: string): Promise<{ connection: Connection }>;
  logout(): Promise<{ connection: Connection }>;
  refreshConnection(): Promise<{ connection: Connection }>;
}
