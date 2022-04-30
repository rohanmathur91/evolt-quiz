import { useState, useContext, createContext } from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext({
  user: null,
  setUser: () => {},
  handleLogout: () => {},
});

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem("evoltQuizToken");
    navigate("/");
  };

  return (
    <AuthContext.Provider value={{ user, setUser, handleLogout }}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => useContext(AuthContext);

export { useAuth, AuthProvider };
