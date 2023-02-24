import React, { useState } from "react";
import LoginForm from "./LoginForm";
import Dashboard from "./Dashboard";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = (username, password) => {
    if (username === "admin" && password === "qwe23#") {
      setIsLoggedIn(true);
    } else {
      console.log("Login failed!");
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <>
      {isLoggedIn ? (
        <>
          <Dashboard />
          <button onClick={handleLogout} className="logout-button">
            Logout
          </button>
        </>
      ) : (
        <LoginForm handleLogin={handleLogin} />
      )}
    </>
  );
};

export default App;
