import { ConnectionEntity } from "../interfaces/entities/ConnectionEntity";

export class Connection implements ConnectionEntity {
  constructor(public accessToken: string, public refreshToken: string) {}
}
