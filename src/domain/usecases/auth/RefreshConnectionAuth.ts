import { inject, injectable } from "tsyringe";
import { Connection } from "../../entities/ConnectionEntity";
import type { IAuthRepository } from "../../interfaces/repositories/IAuthRepository";
import { IBaseUseCase } from "../../interfaces/usecases/IBaseUsecase";

@injectable()
export class RefreshConnectionAuth implements IBaseUseCase {
  constructor(
    @inject("IAuthRepository") private authRepository: IAuthRepository
  ) {}

  async execute(): Promise<{ connection: Connection }> {
    return this.authRepository.refreshConnection();
  }
}
