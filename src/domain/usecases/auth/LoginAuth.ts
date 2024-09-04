import { AuthRepository } from "../../interfaces/repositories/IAuthRepository";
import { Connection } from "../../entities/Connection";

export class LoginAuth {
  constructor(private authRepository: AuthRepository) {}

  async execute(
    email: string,
    password: string
  ): Promise<{ connection: Connection }> {
    return this.authRepository.login(email, password);
  }
}
