import { IConnection } from "../../interfaces/entities/IConnection";
import { IAuthRepository } from "../../interfaces/repositories/IAuthRepository";
import { IBaseUsecase } from "../../interfaces/usecases/IBaseUsecase";

export class LogoutAuth implements IBaseUsecase {
  constructor(private authRepository: IAuthRepository) {}

  async execute(): Promise<IConnection> {
    return this.authRepository.logout();
  }
}
