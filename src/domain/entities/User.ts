import { Role } from "../enums/Role";
import { IUser } from "../interfaces/entities/IUser";

export class User implements IUser {
  constructor(public uuid: string, public email: string, public role: Role) {}
}
