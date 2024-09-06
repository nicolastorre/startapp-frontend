import { IConnection } from "../../interfaces/entities/IConnection";
import { IAuthRepository } from "../../interfaces/repositories/IAuthRepository";
import { IBaseUsecase } from "../../interfaces/usecases/IBaseUsecase";

export class LoginAuth implements IBaseUsecase {
  constructor(private authRepository: IAuthRepository) {}

  async execute(email: string, password: string): Promise<IConnection> {
    return this.authRepository.login(email, password);
  }
}
