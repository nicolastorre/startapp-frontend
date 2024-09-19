import { useEffect, useState } from "react";
import { Container } from "../../../Container";
import { IUser } from "../../../domain/interfaces/entities/IUser";
import { GetUserList } from "../../../domain/usecases/user/GetUserList";

export interface UserListType {
  users: IUser[];
  setUsers: (users: IUser[]) => void;
}

export function useGetUserList(): UserListType {
  const [users, setUsers] = useState<Array<IUser>>([]);

  useEffect(() => {
    const getProfile = async (): Promise<Array<IUser> | null> => {
      try {
        const getUserList = Container.get<GetUserList>("GetUserList");
        const users = await getUserList.execute();
        setUsers(users);
      } catch (err: any) {
        console.error(err.message || "error");
      }

      return null;
    };

    getProfile();
  }, []);

  return { users, setUsers };
}
