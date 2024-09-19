import { IBaseUsecase } from "../../interfaces/usecases/IBaseUsecase";
import { IUserRepository } from "../../interfaces/repositories/IUserRepository";
import { IUser } from "../../interfaces/entities/IUser";

export class GetUserList implements IBaseUsecase {
  constructor(private userRepository: IUserRepository) {}

  async execute(): Promise<Array<IUser>> {
    return this.userRepository.getUserList();
  }
}
