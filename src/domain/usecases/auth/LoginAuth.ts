import { Connection } from "../../entities/ConnectionEntity";
import { inject, injectable } from "tsyringe";
import { IBaseUseCase } from "../../interfaces/usecases/IBaseUsecase";
import type { IAuthRepository } from "./../../interfaces/repositories/IAuthRepository";

@injectable()
export class LoginAuth implements IBaseUseCase {
  constructor(
    @inject("IAuthRepository")
    private authRepository: IAuthRepository
  ) {}

  async execute(
    email: string,
    password: string
  ): Promise<{ connection: Connection }> {
    return this.authRepository.login(email, password);
  }
}
