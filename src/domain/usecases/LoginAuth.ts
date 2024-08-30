import { AuthRepository } from "../interfaces/repositories/AuthRepository";
import { Connection } from "../entities/Connection";

export class LoginAuth {
  constructor(private authRepository: AuthRepository) {}

  async execute(
    email: string,
    password: string
  ): Promise<{ connection: Connection }> {
    const result = await this.authRepository.login(email, password);
    return result;
  }
}
