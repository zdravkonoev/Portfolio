import { Routes, Route } from 'react-router'
import NotFound404 from './components/not-found-404/NotFound404.jsx'
import Home from './components/home/Home.jsx'
import Register from './components/register/Register.jsx'
import { useState } from "react";
import Login from './components/login/Login.jsx'
import Logout from './components/logout/Logout.jsx'
import Blog from './components/blog/Blog.jsx'
import DetailsPost from './components/blog/DetailsPost.jsx';
import Header from './components/header/Header.jsx'
import AdminHeaders from './components/header/AdminHeader.jsx'
import CreatePost from './components/blog/CreatePost.jsx';
import EditPost from './components/blog/EditPost.jsx';
import UserContext from './contexts/UserContext.js';


function App() {

  //const [registeredUsers, setRegisteredUsers] = useState([]);
  const [user, setUser] = useState(null);

  const registerHandler = async(email, password) => {
    
    const newUser = {email, password};

    //Api Call to register user
    const response = await fetch('http://localhost:3030/users/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newUser),
    });

    const result = await response.json();

    console.log("Registered user:", result);
    //setRegisteredUsers(state => [...state, newUser]);

    // Auto-login after registration  
    setUser(result);

  };

  const loginHandler = (email, password) => {

    //const user = registeredUsers.find(u => u.email === email && u.password === password);

    if (!user) {
      throw new Error("Invalid user credentials");
    }
    
    setUser(user);
  };

  const logoutHandler = () => {
    setUser(null);
  };

  const userContextValues = {
    user,
    isAuthenticated: !!user?.accessToken,
    registerHandler,
    loginHandler,
    logoutHandler
  };

  return (
    <UserContext.Provider value={userContextValues} >
      {/* Remove administrative header */}
      {user && <AdminHeaders />}
      <Header user={user} />
      <Routes>
        <Route path="/" element={<Home user={user} />} />
        <Route path="*" element={<NotFound404 />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login onLogin={loginHandler} />} />
        <Route path="/logout" element={<Logout onLogout={logoutHandler} />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:postRefId/post-details" element={<DetailsPost />} />
        <Route path="/blog/:postRefId/post-edit" element={<EditPost />} />
        <Route path="/blog/post-create" element={<CreatePost />} />
      </Routes>
    </UserContext.Provider>
  )
}

export default App
