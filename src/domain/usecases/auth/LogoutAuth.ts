import { IAuthRepository } from "../../interfaces/repositories/IAuthRepository";
import { Connection } from "../../entities/Connection";
import { IBaseUsecase } from "../../interfaces/usecases/IBaseUsecase";

export class LogoutAuth implements IBaseUsecase {
  constructor(private authRepository: IAuthRepository) {}

  async execute(): Promise<{ connection: Connection }> {
    return this.authRepository.logout();
  }
}
