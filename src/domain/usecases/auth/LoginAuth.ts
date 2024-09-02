import { AuthRepository } from "../../interfaces/repositories/AuthRepository";
import { Connection } from "../../entities/ConnectionEntity";

export class LoginAuth {
  constructor(private authRepository: AuthRepository) {}

  async execute(
    email: string,
    password: string
  ): Promise<{ connection: Connection }> {
    return this.authRepository.login(email, password);
  }
}
