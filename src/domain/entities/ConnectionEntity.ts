import { IConnection } from "../interfaces/entities/IConnection";

export class Connection implements IConnection {
  constructor(public isAuthenticated: boolean) {}
}
