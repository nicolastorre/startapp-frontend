import axios from "axios";
import { apiConfig } from "../../app/config/apiConfig";

interface LoginResponse {
  id: string;
  name: string;
  email: string;
  accessToken: string;
  refreshToken: string;
}

export class AuthDataSource {
  async login(email: string, password: string): Promise<LoginResponse> {
    const route: string = "auth/login";

    const response = await axios.post<LoginResponse>(
      `${apiConfig.apiUrl}/${route}`,
      {
        email,
        password,
      }
    );

    if (!response.data) {
      throw new Error("No data received from the server");
    }

    return response.data;
  }
}
