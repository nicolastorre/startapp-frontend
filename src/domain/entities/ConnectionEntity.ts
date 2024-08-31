import { ConnectionEntity } from "../interfaces/entities/Connection";

export class Connection implements ConnectionEntity {
  constructor(public isAuthenticated: boolean) {}
}
