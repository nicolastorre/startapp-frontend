import { IUserRepository } from "../../domain/interfaces/repositories/IUserRepository";
import { IUser } from "../../domain/interfaces/entities/IUser";
import { UserDataSource } from "../dataSources/UserDataSource";

export class UserRepositoryImpl implements IUserRepository {
  constructor(private userDataSource: UserDataSource) {}

  async getProfile(): Promise<IUser> {
    try {
      return await this.userDataSource.getProfile();
    } catch (error: any) {
      throw new Error(error.message || "Failed");
    }
  }

  async getUserList(): Promise<Array<IUser>> {
    try {
      return await this.userDataSource.getUserList();
    } catch (error: any) {
      throw new Error(error.message || "Failed");
    }
  }
}
