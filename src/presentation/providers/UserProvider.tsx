import React, { createContext, ReactNode, useReducer } from "react";
import { User } from "../../domain/entities/User";

export interface UserContextType {
  userState: User | null;
  updateUser: (user: User) => void;
}

interface UserProviderProps {
  children: ReactNode;
}

const initialState: User = {
  uuid: "",
  email: "",
};

type UserAction = { type: "UPDATE"; payload: User };

const UPDATE = "UPDATE";

const userReducer = (state: User, action: UserAction) => {
  switch (action.type) {
    case UPDATE:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};

export const UserContext = createContext<UserContextType | undefined>(
  undefined
);

export const UserProvider = ({ children }: UserProviderProps) => {
  const [userState, userDispatch] = useReducer(userReducer, initialState);

  // Action creators
  const updateUser = (userData: User) => {
    userDispatch({ type: "UPDATE", payload: userData });
  };

  return (
    <UserContext.Provider value={{ userState, updateUser }}>
      {children}
    </UserContext.Provider>
  );
};
