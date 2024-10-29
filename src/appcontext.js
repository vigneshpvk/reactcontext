import { createContext } from "react";

export const AppContext = createContext();

export const toggleColorMode = () => {
  console.log("toggle color mode activated");
};
