import { AuthRepository } from "../../interfaces/repositories/AuthRepository";
import { Connection } from "../../entities/ConnectionEntity";

export class LogoutAuth {
  constructor(private authRepository: AuthRepository) {}

  async execute(): Promise<{ connection: Connection }> {
    return this.authRepository.logout();
  }
}
