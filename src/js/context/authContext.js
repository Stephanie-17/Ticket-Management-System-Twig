// src/js/context/authContext.js

export const AuthContext = (() => {
  const USER_KEY = "ticketapp_user";
  const TOKEN_KEY = "ticketapp_session";
  const USERS_KEY = "ticketapp_users";

  const getAllUsers = () =>
    JSON.parse(localStorage.getItem(USERS_KEY)) || [];

  const saveAllUsers = (users) =>
    localStorage.setItem(USERS_KEY, JSON.stringify(users));

  const getCurrentUser = () =>
    JSON.parse(localStorage.getItem(USER_KEY)) || null;

  const getToken = () =>
    localStorage.getItem(TOKEN_KEY) || null;

  const signup = (newUser) => {
    const users = getAllUsers();
    const existing = users.find((u) => u.email === newUser.email);
    if (existing) throw new Error("Email already exists. Please log in.");

    users.push(newUser);
    saveAllUsers(users);

    localStorage.setItem(USER_KEY, JSON.stringify(newUser));
    localStorage.setItem(TOKEN_KEY, newUser.token);
  };

  const login = (email, password) => {
    const users = getAllUsers();
    const foundUser = users.find(
      (u) => u.email === email && u.password === password
    );
    if (!foundUser) throw new Error("Invalid email or password.");

    localStorage.setItem(USER_KEY, JSON.stringify(foundUser));
    localStorage.setItem(TOKEN_KEY, foundUser.token);
  };

  const logout = () => {
    localStorage.removeItem(USER_KEY);
    localStorage.removeItem(TOKEN_KEY);
    window.location.href = "/sign-up";
  };

  const isAuthenticated = () => !!getToken();

  return {
    signup,
    login,
    logout,
    getUser: getCurrentUser,
    getAllUsers,
    isAuthenticated,
  };
})();
