import { Container } from "../../../Container";
import { IUser } from "../../../domain/interfaces/entities/IUser";
import { GetProfileUser } from "../../../domain/usecases/user/GetProfileUser";
import { useUserContext } from "./useUserContext";
import { useEffect } from "react";

export function useGetProfileUser(): void {
  const userContext = useUserContext();

  useEffect(() => {
    const getProfile = async (): Promise<IUser | null> => {
      try {
        const getProfileUser = Container.get<GetProfileUser>("GetProfileUser");
        const user = await getProfileUser.execute();
        userContext.updateUser(user);

        return user;
      } catch (err: any) {
        console.error(err.message || "error");
      }

      return null;
    };

    getProfile();
  }, []);
}
