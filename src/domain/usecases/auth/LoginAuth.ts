import { IAuthRepository } from "../../interfaces/repositories/IAuthRepository";
import { Connection } from "../../entities/Connection";
import { IBaseUsecase } from "../../interfaces/usecases/IBaseUsecase";

export class LoginAuth implements IBaseUsecase {
  constructor(private authRepository: IAuthRepository) {}

  async execute(
    email: string,
    password: string
  ): Promise<{ connection: Connection }> {
    return this.authRepository.login(email, password);
  }
}
