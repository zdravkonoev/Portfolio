import { Routes, Route } from 'react-router'
import NotFound404 from './components/not-found-404/NotFound404.jsx'
import Home from './components/home/Home.jsx'
import Register from './components/register/Register.jsx'
import { useState } from "react";
import Login from './components/login/Login.jsx'

function App() {

  const [registeredUsers, setRegisteredUsers] = useState([]);
  const [user, setUser] = useState(null);

  const registerHandler = (email, password) => {
    if (registeredUsers.find(u => u.email === email)) {
      throw new Error("User already exists!");
    }

    const newUser = {email, password};

    setRegisteredUsers(state => [...state, newUser]);

    // Auto-login after registration  
    setUser(newUser);

  };

  const loginHandler = (email, password) => {

    const user = registeredUsers.find(u => u.email === email && u.password === password);

    if (!user) {
      throw new Error("Invalid user credentials");
    }
    
    setUser(user);
  };

  const logoutHandler = () => {
    setUser(null);
  };

  return (
    <>   
      <Routes>
        <Route path="/" element={<Home user={user} />} />
        <Route path="*" element={<NotFound404 />} />
        <Route path="/register" element={<Register onRegister={registerHandler} />} />
        <Route path="/login" element={<Login onLogin={loginHandler} />} />
        <Route path="/logout" element={<Logout onLogin={logoutHandler} />} />
      </Routes>
    </>
  )
}

export default App
