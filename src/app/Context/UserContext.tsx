"use client";
import { createContext, useState } from "react";

type UserDataSchema = {
  userId: number;
  username: string;
  email: string;
  createdAt: string;
  gender: string;
  height: number;
  weight: number;
  age: number;
  goal: string;
  goalWeight: number;
  birthDate: string;
  activyLevel: string;
  avatarUrl: string;
  isActive: boolean;
  updatedAt: string;
  role: null;
};

type UserContextSchema = {
  handleSetUser: (user: UserDataSchema) => void;
  User: UserDataSchema;
};

export const UserContext = createContext({} as UserContextSchema);

export const UserContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [User, setUser] = useState({} as UserDataSchema);

  const handleSetUser = (user: UserDataSchema) => setUser(user);

  return (
    <UserContext.Provider value={{ handleSetUser, User }}>
      {children}
    </UserContext.Provider>
  );
};
