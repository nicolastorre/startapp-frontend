import { IAuthRepository } from "../../interfaces/repositories/IAuthRepository";
import { IBaseUsecase } from "../../interfaces/usecases/IBaseUsecase";
import { IConnection } from "../../interfaces/entities/IConnection";

export class RefreshConnectionAuth implements IBaseUsecase {
  constructor(private authRepository: IAuthRepository) {}

  async execute(): Promise<IConnection> {
    return this.authRepository.refreshConnection();
  }
}
