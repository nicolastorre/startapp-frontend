import { AuthRepository } from "../interfaces/repositories/AuthRepository";
import { User } from "../entities/User";
import { Connection } from "../entities/Connection";

export class LoginUser {
  constructor(private authRepository: AuthRepository) {}

  async execute(
    email: string,
    password: string
  ): Promise<{ user: User; connection: Connection }> {
    const result = await this.authRepository.login(email, password);
    return result;
  }
}
