import { AuthRepository } from "../../interfaces/repositories/IAuthRepository";
import { Connection } from "../../entities/Connection";

export class RefreshConnectionAuth {
  constructor(private authRepository: AuthRepository) {}

  async execute(): Promise<{ connection: Connection }> {
    return this.authRepository.refreshConnection();
  }
}
