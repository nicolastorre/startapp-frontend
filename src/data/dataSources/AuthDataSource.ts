import axios from "axios";
import { apiConfig } from "../../app/config/apiConfig";

interface LoginResponse {}

interface RefreshConnectionResponse {}

export class AuthDataSource {
  async login(email: string, password: string): Promise<LoginResponse> {
    const route: string = "auth/login";

    const response = await axios.post<LoginResponse>(
      `${apiConfig.apiUrl}/${route}`,
      {
        email,
        password,
      },
      { withCredentials: true }
    );

    if (!response.data) {
      throw new Error("No data received from the server");
    }

    return response.data;
  }

  async logout(): Promise<LoginResponse> {
    const route: string = "auth/logout";

    const response = await axios.delete<LoginResponse>(
      `${apiConfig.apiUrl}/${route}`,
      { withCredentials: true }
    );

    if (!response.data) {
      throw new Error("No data received from the server");
    }

    return response.data;
  }

  async refreshConnection(): Promise<RefreshConnectionResponse> {
    const route: string = "auth/refreshConnection";

    const response = await axios.post<RefreshConnectionResponse>(
      `${apiConfig.apiUrl}/${route}`,
      {},
      { withCredentials: true }
    );

    if (!response.data) {
      throw new Error("No data received from the server");
    }

    return response.data;
  }
}
