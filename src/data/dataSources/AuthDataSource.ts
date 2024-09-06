import axiosInstance from "../../app/config/axiosConfig";

interface LoginResponse {}

interface RefreshConnectionResponse {}

export class AuthDataSource {
  async login(email: string, password: string): Promise<LoginResponse> {
    const route: string = "/auth/login";

    const response = await axiosInstance.post<LoginResponse>(
      route,
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

    const response = await axiosInstance.delete<LoginResponse>(route, {
      withCredentials: true,
    });

    if (!response.data) {
      throw new Error("No data received from the server");
    }

    return response.data;
  }

  async refreshConnection(): Promise<RefreshConnectionResponse> {
    const route: string = "auth/refreshConnection";

    const response = await axiosInstance.post<RefreshConnectionResponse>(
      route,
      {},
      { withCredentials: true }
    );

    if (!response.data) {
      throw new Error("No data received from the server");
    }

    return response.data;
  }
}
