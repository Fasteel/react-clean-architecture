import React, { FC, useContext } from "react";
import * as requests from "./requests";

const ApiContext = React.createContext(requests);

const ApiProvider: FC = ({ children }) => {
  return <ApiContext.Provider value={requests}>{children}</ApiContext.Provider>;
};

const useApi = () => {
  return useContext(ApiContext);
};

export { ApiProvider, useApi };
