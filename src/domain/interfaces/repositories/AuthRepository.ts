import { User } from "../../entities/User";
import { Connection } from "../../entities/Connection";

export interface AuthRepository {
  login(email: string, password: string): Promise<{ connection: Connection }>;
  getAuthenticatedUser(): Promise<User | null>;
  getConnection(): Promise<Connection | null>;
}
