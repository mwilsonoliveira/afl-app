import { createContext, useState, useContext } from "react";
import { authentication } from "../services";

interface AuthContextType {
  isAuthenticated: boolean;
  login: (username: string, password: string) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType>({
  isAuthenticated: false,
  login: () => {},
  logout: () => {},
});

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }: any) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

  const login = async (username: string, password: string) => {
    try {
      await authentication({ username, password });
      setIsAuthenticated(true);
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  const logout = () => {
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
