import { Connection } from "../../entities/ConnectionEntity";

export interface AuthRepository {
  login(email: string, password: string): Promise<{ connection: Connection }>;
  refreshConnection(): Promise<{ connection: Connection }>;
}
