import { IBaseUsecase } from "../../interfaces/usecases/IBaseUsecase";
import { IUserRepository } from "../../interfaces/repositories/IUserRepository";
import { IUser } from "../../interfaces/entities/IUser";

export class GetProfileUser implements IBaseUsecase {
  constructor(private userRepository: IUserRepository) {}

  async execute(): Promise<IUser> {
    return this.userRepository.getProfile();
  }
}
