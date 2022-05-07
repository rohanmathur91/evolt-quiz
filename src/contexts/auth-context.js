import { useState, useContext, createContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext({
  user: null,
  setUser: () => {},
  handleLogout: () => {},
});

const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const encodedToken = localStorage.getItem("evoltQuizToken");
    if (encodedToken) {
      setUser(JSON.parse(localStorage.getItem("evoltQuizUser")));
    }
  }, []);

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem("evoltQuizUser");
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
