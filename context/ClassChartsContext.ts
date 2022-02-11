import { createContext } from "react";
import ClassCharts from "../types/ClassCharts";

export type UserContextType = {
  user?: ClassCharts | false;
  setUser: Function;
};

export const UserContext = createContext<UserContextType>({
  user: undefined,
  setUser: () => {},
});

export const UserContextProvider = UserContext.Provider;
