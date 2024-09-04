import { AuthRepository } from "../../interfaces/repositories/IAuthRepository";
import { Connection } from "../../entities/Connection";

export class LogoutAuth {
  constructor(private authRepository: AuthRepository) {}

  async execute(): Promise<{ connection: Connection }> {
    return this.authRepository.logout();
  }
}
