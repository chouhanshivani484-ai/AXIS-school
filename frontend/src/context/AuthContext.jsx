import {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    try {
      const savedUser = localStorage.getItem("axis_user");

      if (!savedUser) {
        return null;
      }

      return JSON.parse(savedUser);
    } catch (error) {
      console.error("Failed to load user:", error);

      localStorage.removeItem("axis_user");
      localStorage.removeItem("axis_token");

      return null;
    }
  });

  const [token, setToken] = useState(() => {
    return localStorage.getItem("axis_token") || null;
  });

  useEffect(() => {
    if (user) {
      localStorage.setItem(
        "axis_user",
        JSON.stringify(user)
      );
    } else {
      localStorage.removeItem("axis_user");
    }
  }, [user]);

  useEffect(() => {
    if (token) {
      localStorage.setItem("axis_token", token);
    } else {
      localStorage.removeItem("axis_token");
    }
  }, [token]);

  const login = (userData, authToken) => {
    setUser(userData);
    setToken(authToken);
  };

  const logout = () => {
    setUser(null);
    setToken(null);

    localStorage.removeItem("axis_user");
    localStorage.removeItem("axis_token");
  };

  const hasRole = (role) => {
    return user?.role === role;
  };

  const value = {
    user,
    token,

    login,
    logout,

    hasRole,

    isAuthenticated: Boolean(user && token),

    isStudent: user?.role === "student",
    isParent: user?.role === "parent",
    isTeacher: user?.role === "teacher",
    isAdmin: user?.role === "admin",
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error(
      "useAuth must be used inside AuthProvider"
    );
  }

  return context;
};

export default AuthContext;