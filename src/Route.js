import React from "react";
import { Router } from "@reach/router";
import Landing from "./pages";
import Services from "./pages/Services/service";

export const AuthContext = React.createContext();
const AppRouter = () => {
  return (
    <AuthContext.Provider value={{
      user: 'uzo', loggedIn: false
    }}>
      <Router>
        <Landing path="/" />
        <Services path="services" />
      </Router>
    </AuthContext.Provider>
  );
};
export default AppRouter;
