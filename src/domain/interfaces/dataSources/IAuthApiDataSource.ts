export interface LoginResponse {}

export interface RefreshConnectionResponse {}

export interface IAuthApiDataSource {
  login(email: string, password: string): Promise<LoginResponse>;
  logout(): Promise<LoginResponse>;
  refreshConnection(): Promise<RefreshConnectionResponse>;
}
