import axiosInstance from "../../app/config/axiosConfig";
import { IUser } from "../../domain/interfaces/entities/IUser";

export class UserDataSource {
  async getProfile(): Promise<IUser> {
    const route: string = "/users/user/profile";

    const response = await axiosInstance.get<IUser>(route);

    return response.data;
  }

  async getUserList(): Promise<Array<IUser>> {
    const route: string = "/users";

    const response = await axiosInstance.get<Array<IUser>>(route);

    return response.data;
  }
}
