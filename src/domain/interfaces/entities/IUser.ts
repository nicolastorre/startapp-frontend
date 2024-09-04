import { Role } from "../../enums/Role";

export interface IUser {
  uuid: string;
  email: string;
  role: Role;
}
