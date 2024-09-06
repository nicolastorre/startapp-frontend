import { Role } from "../../enums/Role";

export interface IUser {
  uuid: string;
  email: string;
  firstname: string;
  name: string;
  role: Role;
}
