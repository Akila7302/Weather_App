import React, { useState } from "react";
import LoginForm from "./screens/LoginForm";
import Dashboard from "./screens/Dashboard";

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
          {/* <div class="logout-btn">
            <button type="button" onclick="logout()">
              Logout
            </button>
          </div> */}

          <button class="logout-btn" type="button" onClick={handleLogout}>
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
