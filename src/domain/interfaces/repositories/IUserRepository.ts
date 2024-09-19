import { IUser } from "../entities/IUser";

export interface IUserRepository {
  getProfile(): Promise<IUser>;
  getUserList(): Promise<Array<IUser>>;
}
